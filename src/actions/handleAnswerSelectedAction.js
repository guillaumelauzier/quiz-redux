import { HANDLE_ANSWER_SELECTED } from './types'
import { setNextQuestion } from './setNextQuestionAction'
import { setResults } from './setResultsAction'
// import { setUserAnswer } from './setUserAnswerAction'
// import { getResults } from './getResultsAction'
import update from 'immutability-helper'


export const handleAnswerSelected = (event, propsHandedDown) => dispatch => {
    const answer = event.target.value
    console.log('handleAnswer', event.target.value, propsHandedDown.answersCount)
    const updatedAnswersCount = update(propsHandedDown.answersCount, {
        [answer]: { $apply: (currentValue) => currentValue + 1 }
    });
 
    // dispatch(setUserAnswer(event.target.value, propsHandedDown.answersCount))
    // console.log('going to next question function', propsHandedDown.questionId, propsHandedDown.questionTotal)
    // KNOW WHY propsHandedDown doesnt go to else statement on last question hint: follow state of 'questionTotal'
    if (propsHandedDown.questionId < propsHandedDown.questionTotal) {
        console.log(`LOOK HHERE!!!! ${propsHandedDown}`)
        // if (1 === 1) {
        console.log('going to next question function', propsHandedDown.questionId, propsHandedDown.questionTotal)
        setTimeout(() => dispatch(setNextQuestion(propsHandedDown.questionId, propsHandedDown.quizQuestions, answer, updatedAnswersCount, propsHandedDown.counter), 300));
    } else {
        console.log('going here :)')
        // setTimeout(() => setResults(getResults()), 300);

        const answersCount = propsHandedDown.answersCount;
        console.log(answersCount)
        const answersCountKeys = Object.keys(answersCount);
        console.log(answersCountKeys)
        const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
        console.log(answersCountValues)
        const maxAnswerCount = Math.max.apply(null, answersCountValues);


        console.log('max answer count: ', maxAnswerCount)
        console.log(answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount))
        dispatch(setResults(answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount)));
    }
}

// export const handleAnswerSelected = async (event, propsHandedDown) => dispatch => {
//     console.log('handleAnswer', event.target.value, propsHandedDown)
//     dispatch(setUserAnswer(event.target.value, propsHandedDown.answersCount));
//     try {
//         if (propsHandedDown.questionId < propsHandedDown.quizQuestionTotal) {
//             setTimeout(() => dispatch(setNextQuestion(propsHandedDown.questionId, propsHandedDown.questionTotal), 300));
//         } else {
//             setTimeout(() => dispatch(setResults(getResults()), 300));
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }





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