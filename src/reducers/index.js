import { combineReducers } from 'redux'
import getQuestionReducer from './getQuestionReducer'

import undoable, { distinctState } from 'redux-undo'

export default combineReducers({
    question: undoable(getQuestionReducer)
})