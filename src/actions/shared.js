//import { setAuthedUser } from './authedUser'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { getInitialData } from '../utils/API'


export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({questions,users}) => {
      dispatch(receiveQuestions(questions))
      dispatch(receiveUsers(users))
    })
  }
}