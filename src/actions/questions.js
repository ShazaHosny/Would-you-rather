import {
    _saveQuestion,
    _saveQuestionAnswer} 
    from '../utils/Data.js'

//import {saveQuestion,saveQuestionAnswer}from '../utils/API'
import {saveQuestionToUser , saveQuestionAnswerToUser} from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'


export function receiveQuestions (questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}
export function handlesaveQuestion(question){
    return {
        type: SAVE_QUESTION,
        question

    }
}
export function handlesaveQuestionAnswer(authedUser,qid,answer){
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveQuestionToUser ( optionOne , optionTwo,question){
    return (getState , dispatch )=>{

    return _saveQuestion({
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        authedUser: getState(),
    }).then((question)=>
        dispatch(handlesaveQuestion(question)),
        dispatch(saveQuestionToUser(question))
    )}
}

export function handleSaveQuestionAnswer(authedUser , qid,answer){
    return (getState,dispatch)=>{
        // const {authedUser} = getState(); 
        
        return _saveQuestionAnswer({
            authedUser:authedUser,
            qid:qid,
            answer:answer,
            
        }).then(()=>
        dispatch(handlesaveQuestionAnswer(authedUser ,qid ,answer )),
        dispatch(saveQuestionAnswerToUser(authedUser, qid ,answer))
        )
    }
}



