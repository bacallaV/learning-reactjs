type SecurityCodeState = {
  code: string;
  error: boolean;
  loading: boolean;
  shouldConfirm: boolean;
  isRemoved: boolean;
}

type SecurityCodeAction = {
  type: SecurityCodeActionTypes;
  payload?: string;
}

export enum SecurityCodeActionTypes {
  SET_CODE = 'SET_CODE',
  SET_ERROR = 'SET_ERROR',
  SET_LOADING = 'SET_LOADING',
  SET_SHOULD_CONFIRM = 'SET_SHOULD_CONFIRM',
  SET_REMOVED = 'SET_REMOVED',
  SET_RESET = 'SET_RESET',
}

export const initialState: SecurityCodeState = {
  code: '',
  error: false,
  loading: false,
  shouldConfirm: false,
  isRemoved: false,
}

export function securityCodeReducer(state: SecurityCodeState, action: SecurityCodeAction): SecurityCodeState {
  const { type, payload } = action;

  const Handler: Record<SecurityCodeActionTypes, SecurityCodeState> = {
    [SecurityCodeActionTypes.SET_CODE]: {
      ...state,
      code: payload ?? '',
    },
    [SecurityCodeActionTypes.SET_ERROR]: {
      ...state,
      shouldConfirm: false,
      loading: false,
      error: true,
    },
    [SecurityCodeActionTypes.SET_LOADING]: {
      ...state,
      error: false,
      shouldConfirm: false,
      loading: true,
    },
    [SecurityCodeActionTypes.SET_SHOULD_CONFIRM]: {
      ...state,
      error: false,
      loading: false,
      shouldConfirm: true,
    },
    [SecurityCodeActionTypes.SET_REMOVED]: {
      ...state,
      error: false,
      loading: false,
      shouldConfirm: false,
      isRemoved: true,
    },
    [SecurityCodeActionTypes.SET_RESET]: {
      ...initialState,
    },
  }

  return Handler[type] ?? state;
}