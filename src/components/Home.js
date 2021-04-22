import React  from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import '../css/Home.css'

class Home extends React.Component{

    state={
        list:'AnsweredQuestion'
    }
    handleListSelection =(e)=>{
        this.setState({list: e.target.value})
    }


    render(){
       // console.log(this.props.answer)
        //console.log(this.props.users)
        //console.log(this.props.authedUser)

        console.log(this.props.AnsweredQuestion)
        console.log(this.props.UnansweredQuestion)

        const {list} =this.state
        const {AnsweredQuestion,UnansweredQuestion}=this.props
        
        return(
            <div>
                <div  className="list">
                    <select onChange={this.handleListSelection} >
                       
                        <option value ='AnsweredQuestion'>Answered Question</option>
                        <option value='UnansweredQuestion'>Unanswered Question</option>
                    </select>
                </div>
                <div>
                    <ul>
                    {
                        list==='AnsweredQuestion' &&
                        (
                            AnsweredQuestion.map((id)=>(
                                <Question id={id}/>
                            ) ))
                    }
                    {
                         list==='UnansweredQuestion' &&
                         (
                            UnansweredQuestion.map((id)=>(
                                <Question id={id}/>
                            ) ))
                    }
                    </ul>
                </div>

            </div>
        )
    }

}
function mapStateToProps({authedUser,users,questions}){
   /*const answer=Object.keys(users).map((c)=>{
    if (authedUser==users[c].name)
    {
        return (users[c].questions)
    }
   })
    //const questionId = Object.keys(authedUser.answer)

   
    const user =users[authedUser]*/ 
    const AnsweredQuestion = Object.keys(questions)
                            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
                            .filter((id)=>users[authedUser].answers.hasOwnProperty(id))
                            

    const UnansweredQuestion = Object.keys(questions)
                            .sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
                            .filter((a)=>!AnsweredQuestion.includes(a))
    return{
     AnsweredQuestion,
    UnansweredQuestion,
    }
}

export default connect(mapStateToProps)(Home);