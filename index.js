import merge from 'lodash.merge'

const createReducer = (handlers, initialState = {}) => (
  state = initialState,
  action
) => {
  const handler = handlers[action.type]
  if (!handler) {
    throw new Error(`Unknown action type: ${action.type}`)
  }
  const nextState = handler(state, action)
  return merge({}, state, nextState)
}

export default createReducer
