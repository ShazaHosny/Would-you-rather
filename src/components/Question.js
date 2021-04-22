import React from 'react'
import{connect} from 'react-redux'
import {NavLink} from 'react-router-dom'



class Question extends React.Component{
  /*  nextPath(path) {
        this.props.history.push(path);
      }*/
    render(){
        //console.log(this.props.questions)
        const {question,author , questionId} = this.props
        return(
            <div>
                <li key={questionId}>
                {/* <li onClick={()=>this.nextPath(`/questions/${questionId}`)} > */}
                    <img alt="image" 
                     src={author.avatarURL}
                     height='30'
                     width='30'
                     />
                    <NavLink to ={`/questions/${questionId}`}>{author.name}  
                    <div>Would you rather</div>
                    <div>{question.optionOne.text}</div>
                    <button >View poll</button>
                    </NavLink>
                </li>
              
            </div>
        )
    }
}
function mapStateToProps({ questions, users }, { id }) {
    const question = questions[id];
    const questionId = question.id;
    const author = users[question.author]
   
    return { 
        question,
        author ,
        questionId,
        questions
    }
  }

export default connect(mapStateToProps)(Question) ;