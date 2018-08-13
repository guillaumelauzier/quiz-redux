import { SET_RESULTS } from './types'

export const setResults = (result) => dispatch => {
    console.log('set results action', result)
    if (result.length === 1) {
        dispatch({ 
            type: SET_RESULTS,
            payload: result[0] })
    } else {
        dispatch({ 
            type: SET_RESULTS,
            payload: 'Undetermined'
        })
    }
} 