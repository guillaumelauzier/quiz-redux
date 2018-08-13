import { GET_QUESTION } from './types'

export const getQuestion = (quizQuestions) => dispatch => {
    console.log('get question action')
    const answerOptions = quizQuestions.map((question) => question.answers);
    dispatch({
        type: GET_QUESTION,
        payload: {
            question: quizQuestions[0].question,
            answerOptions: answerOptions[0]
        }
    });
}

