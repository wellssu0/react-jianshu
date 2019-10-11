import { fromJS } from 'immutable'

const defaultState = fromJS({

})

const reducer = (state = defaultState , action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return 
    default:
      return state
  }
}


export default reducer