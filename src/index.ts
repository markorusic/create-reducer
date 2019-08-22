import merge from 'lodash.merge'

interface Action<Payload = any> {
  type: string
  payload?: Payload
}

type Handler<State> = (state: State, action: Action) => Partial<State>

interface HandlerGroup<State> {
  [key: string]: Handler<State>
}

const createReducer = <State>(
  handlers: HandlerGroup<State>,
  initialState?: State
) => (state = initialState, action: Action) => {
  const handler = handlers[action.type]
  if (!handler) {
    throw new Error(`Unknown action type: ${action.type}`)
  }
  const nextState = handler(state, action)
  return merge({}, state, nextState)
}

export default createReducer
