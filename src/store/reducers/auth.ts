import * as actionTypes from '../actions/actionTypes';
import { AnyAction } from "redux";

// TODO: Check types of Initial state of auth reducers
interface InitialState {
  token: string;
  userId: string;
  error: string | null;
  loading: boolean;
  authRedirectPath: string;
}

// TODO: Check it, cause there was null everywhere
const initialState: InitialState = {
  token: '',
  userId: '',
  error: '',
  loading: false,
  authRedirectPath: '',
};

const authStart = (state: InitialState): InitialState => {
  return {
    ...state,
    loading: true,
    error: null,
  }
};

// TODO: Add type to action
const reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
      case actionTypes.AUTH_START:
        return authStart
    }
};

export default reducer;
