import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo'

import quizQuestions from './api/quizQuestions'
import Quiz from './components/Quiz'
import Result from './components/Result'
import UndoRedo from './containers/UndoRedo'

import { getQuestion } from './actions/getQuestionAction'
// import { getResults } from './actions/getResultsAction'
import { handleAnswerSelected } from './actions/handleAnswerSelectedAction'
// import { renderQuiz } from './actions/renderQuizAction'
// import { renderResult } from './actions/renderResultAction'
import { setNextQuestion } from './actions/setNextQuestionAction'
import { setResults } from './actions/setResultsAction'
import { setUserAnswer } from './actions/setUserAnswerAction'

// let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
//   <p>
//     <button onClick={onUndo} disabled={!canUndo}>
//       Undo
//     </button>
//     <button onClick={onRedo} disabled={!canRedo}>
//       Redo
//     </button>
//   </p>
// )

class App extends Component {

  componentWillMount() {
    this.props.getQuestion(quizQuestions)
    console.log(this.props)
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.props.question.answer}
        answerOptions={this.props.question.answerOptions}
        questionId={this.props.question.questionId}
        question={this.props.question.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.props.handleAnswerSelected}
        answersCount={this.props.question.answersCount}
        quizQuestions={quizQuestions}
        counter={this.props.question.counter}
      />)
  }

  renderResult() {
    return (
      <Result quizResult={this.props.question.result} />
    )
  }



  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Quiz</h2>
        </div>
          {this.props.question.result ? this.renderResult() : this.renderQuiz()}
          <UndoRedo />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  question: state.question.present,
  // canUndo: state.question.past.length > 0,
  // canRedo: state.question.future.length > 0
})

// const mapDispatchToProps = dispatch => ({
//   getQuestion: () => dispatch(getQuestion()),
//   getResults: () => dispatch(getResults()),
//   handleAnswerSelected: () => dispatch(handleAnswerSelected()),
//   renderQuiz: () => dispatch(renderQuiz()),
//   renderResult: () => dispatch(renderResult()),
//   setNextQuestion: () => dispatch(setNextQuestion()),
//   setResults: () => dispatch(setResults()),
//   setUserAnswer: () => dispatch(setUserAnswer())
// })

// const mapDispatchToProps = dispatch => {
//   return {
//     onUndo: () => dispatch(ActionCreators.undo()),
//     onRedo: () => dispatch(ActionCreators.redo())
//   }
// }

export default connect(mapStateToProps, {
  // mapDispatchToProps,
  getQuestion,
  // getResults,
  handleAnswerSelected,
  // renderQuiz,
  // renderResult,
  setNextQuestion,
  setResults,
  setUserAnswer
})(App);
