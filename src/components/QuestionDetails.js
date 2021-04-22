import React from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestionAnswer} from '../actions/questions'

class QuestionDetails extends React.Component{
    
    state={
        poll:''
    }

    handlechoice = (e) => {
        e.preventDefault();
        this.setState({poll: e.target.value})
      }
    

    handlesubmit =(e)=>{
        // e.preventDefault();
        if (this.state.poll !== ''){
            this.props.handleSaveQuestionAnswer(this.state.poll);
        }
    
    }

    render(){
   
       // const id = this.props.match.params.id
        //console.log(this.props.questions)
        //console.log(id)

        const {questionId, questions,users, question,author , answers , precentageOne , precentageTwo ,authedUser,optionTwo,optionOne}=this.props

        // const question = questions[id]
        // const author = questions[id].author
       // const questionId = questions[id].id

        console.log(question)
        console.log(author)
        console.log(questionId)
        console.log(this.props.answers)


        return(

            <div>
            <div>Question Deatils :</div>
           
                 {answers === undefined ? (
                     
                        Object.keys(questions).map((a)=>{
                           if(questionId===questions[a].id){
                             return (
                                 <div>
                                      <li key={questionId}>
                                          <div>{users[question.author].name} asks:</div>

                                           <img alt='image'
                                           src={users[question.author].avatarURL}
                                           height='30'
                                           width='30'
                                           />
                                           
                                           <div>Would you rather</div>
                                           <div>
                                               <input
                                               type='radio'
                                               name='radio one'
                                               value="optionOne"
                                            
                                                onClick={this.handlechoice }
                                               />
                                               {question.optionOne.text}
                                           </div>
                                           <div>
                                            <input
                                                type='radio'
                                                name='radio two'
                                                value="optionTwo"
                                               
                                                onClick={this.handlechoice}
                                                />
                                               {question.optionTwo.text}
                                           </div>
                                           <button  onClick={this.handlesubmit()}>Submit</button>
                                         
                                        </li>
                                    </div>
             
                                       )
                                    }
                                })
                 ) : (
                     
                    Object.keys(questions).map((a)=>{
                        if(questionId===questions[a].id){
                          return (
                     <div>
                         <li key={questionId}>
                                          <div>{users[question.author].name} asks:</div>

                                           <img alt='image'
                                           src={users[question.author].avatarURL}
                                           height='30'
                                           width='30'
                                           />
                                           
                                           <div>Would you rather</div>
                                              <div>Option one : {question.optionOne.text}</div> 
                                               <div>votes:{optionOne}of {question.optionOne.votes.length}  </div>
                                               <div>Precentage : {precentageOne}%</div>

                                               <div>Option Two{question.optionTwo.text}</div>
                                             
                                               <div>votes: {optionTwo} of {question.optionTwo.votes.length}  </div>
                                               <div>Precentage : {precentageTwo}%</div>
                                                         
                          </li>

                     </div>
                          )
                        }
                    })
                 )
                 
                 }
            </div>
        )
    }
}


function mapStateToProps({questions , users , authedUser}, props){
    //const question = questions[id];
    // const questionId = question.id;
    // const author = users[question.author];

    const questionId=  props.match.params.id;
    const question = questions[questionId];
    const author = questions[questionId].author
    const answers = users[authedUser].answers[questionId];


    const optionOne = question.optionOne.votes ? question.optionOne.votes.length : 0
    const optionTwo = question.optionTwo.votes ? question.optionTwo.votes.length : 0

     const total=(optionOne + optionTwo) 
    const precentageOne = (optionOne/total)*100
    const precentageTwo = (optionTwo/total)*100

    return {

        questions,
        users ,
        questionId , 
        question,
        author,
        answers,
        optionTwo,
        optionOne,
        precentageOne,
        precentageTwo,
        authedUser
 
    }
}
function mapDispatchToProps(dispatch, props) {

    const questionId=  props.match.params;

    return {
      handleSaveQuestionAnswer: (authedUser,poll) => { dispatch(handleSaveQuestionAnswer(authedUser,questionId, poll))}
    }
  }

export default connect (mapStateToProps , mapDispatchToProps)(QuestionDetails) ;

