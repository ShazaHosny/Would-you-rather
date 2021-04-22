export const RECEIVE_USERS ='RECEIVE_USERS'
export const SAVE_QUESTION_TO_USER = 'SAVE_QUESTION_TO_USER'
export const SAVE_QUESTION_ANSWER_To_USER = 'SAVE_QUESTION_ANSWER_TO_USER'

export function receiveUsers(users){
    return{
        type: RECEIVE_USERS,
        users,
    }
}

export function saveQuestionToUser (question){
    return{
        type: SAVE_QUESTION_TO_USER,
        question,
    }
}
export function saveQuestionAnswerToUser (authedUser,qid,answer) {
    return {
        type : SAVE_QUESTION_ANSWER_To_USER,
        answer ,
        qid,
        authedUser,
    }
}
