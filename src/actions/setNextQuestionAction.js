import { SET_NEXT_QUESTION } from './types'

export const setNextQuestion = (quesId, quizQuestions, answer, updatedAnswersCount, count) => dispatch => {
    console.log(counter)
    const counter = count + 1;
    const questionId = quesId + 1;
    console.log('setnextsquestionaction going on: ', quesId, quizQuestions)
    dispatch({
        type: SET_NEXT_QUESTION,
        payload: {
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: answer,
            answersCount: updatedAnswersCount
        }
    });
}