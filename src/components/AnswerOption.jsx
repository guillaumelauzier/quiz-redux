import React from 'react'
// import { connect } from '../../node_modules/react-redux';

const AnswerOptions = (props) => {
  console.log('answerOptions: ', props.questionId)
  const propsToPass = {
    questionId: props.questionId,
    questionTotal: props.questionTotal,
    answersCount: props.answersCount,
    quizQuestions: props.quizQuestions,
    counter: props.counter
  }
  console.log(props.quizQuestions)
    return (
        <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          disabled={props.answer}
          counter={props.counter}
          onChange={(e) => {
            console.log('onChange from answeroptions', e.target.value, 'props to pass: ', propsToPass)
            props.onAnswerSelected(e, propsToPass)}}
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    )
}

export default AnswerOptions