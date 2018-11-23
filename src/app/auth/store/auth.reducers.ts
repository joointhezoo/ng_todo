import * as AuthActions from './auth.actions';
export interface State {
  authenticated: boolean;
  userId: string;
}

const initState: State = {
  authenticated: false,
  userId: null
};

export function AuthReducer(state = initState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.SIGN_UP):
    case (AuthActions.LOGIN):
      return {
        ...state,
        authenticated: true
      };

    case (AuthActions.LOGOUT):
      return {
        ...state,
        authenticated: false
      };

    case (AuthActions.GET_DB):
      return {
        ...state,
        userId: action.payload
      };

    default:
      return state;
  }
}


