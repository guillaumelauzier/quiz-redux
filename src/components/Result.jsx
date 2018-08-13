import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {

  return (
    <div className="container result">
      <div>
        You prefer <strong>{props.quizResult}</strong>!
      </div>
    </div>
  );

}

// Result.propTypes = {
//   quizResult: React.PropTypes.string.isRequired,
// };

export default Result;
