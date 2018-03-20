import { FETCH_DATA } from '../actions/index'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_DATA:
      return [ action.payload.data, ...state ]

    default:
      return state
    }
}
