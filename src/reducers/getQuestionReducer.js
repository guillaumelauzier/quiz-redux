// import undoable, { distinctState } from 'redux-undo'
import { GET_QUESTION, SET_NEXT_QUESTION, SET_USER_ANSWER, SET_RESULTS } from '../actions/types'

const intitialState = {
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {
        Nintendo: 0,
        Microsoft: 0,
        Sony: 0
    },
    result: ''
}


const getQuestionReducer = function (state = intitialState, action) {
    switch (action.type) {
        case GET_QUESTION:
            console.log(action.payload)
            return { ...state, question: action.payload.question, answerOptions: action.payload.answerOptions }
        case SET_USER_ANSWER:
            console.log('setuseranswer reducer: ', action.payload)
            return { ...state, answer: action.payload.answer, answersCount: action.payload.answersCount }
        case SET_NEXT_QUESTION:
            console.log(`SET NEXT QUESTION`)
            return {
                counter: state.counter += 1,
                questionId: action.payload.questionId,
                question: action.payload.question,
                answerOptions: action.payload.answerOptions,
                answer: '',
                answersCount: action.payload.answersCount
            }
        case SET_RESULTS:
            console.log(`SETS RESULT`)
            return { ...state, result: action.payload}
        default: return state

    }
} 

// const undoableState = undoable(getQuestionReducer, {
//     filter: distinctState()
// })

// export default undoableState

export default getQuestionReducer