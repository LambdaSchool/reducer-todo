import { VisibilityFilters } from '../actions'
//handle SET_VISIBILITY_FILTER. All it needs to do is to change visibilityFilter on the state.
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter