/* 
  src/actions/simpleAction.js
*/

export const sessionAction = (user) => dispatch => {
  dispatch({
    type: 'SESSION',
    payload: user
  })
}