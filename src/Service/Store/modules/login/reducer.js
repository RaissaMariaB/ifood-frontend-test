import produce from 'immer'

const INITIAL_STATE = {
  token: null,
  error: null,
}

export default function authRequest(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/LOGIN_SUCESS':
      return produce(state, (draft) => {
        const {token} = action

        if (draft) {
          draft.token = token
        }
      })
    case '@auth/LOGIN_ERROR':
      return produce(state, (draft) => {
        let {error} = action
        draft.error = error
      })

    default:
      return state
  }
}
