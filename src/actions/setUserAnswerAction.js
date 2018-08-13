// import { SET_USER_ANSWER } from './types'
// import update from 'react-addons-update'

// export const setUserAnswer = (answer, answersCount) => dispatch => {
//     console.log('setUserAnswer', answer, answersCount)
    
//     const updatedAnswersCount = update(answersCount, {
//         [answer]: { $apply: (currentValue) => currentValue + 1 }
//     });
    
//     dispatch({
//         type: SET_USER_ANSWER,
//         payload: {
//             answersCount: updatedAnswersCount,
//             answer: answer
//         }
//     });
// }