/* 
  src/reducers/simpleReducer.js
*/
const initState = {
  currentUser: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'SESSION':
      return { currentUser: action.payload }
    default:
      return state
  }
}
