import { createReducer, on } from '@ngrx/store';
import { loginFailure, loginRequest, loginSuccess } from './auth.actions';
import { LocalStorageService } from '../../service/local-storage.service';

export interface AuthInterface {
  isLoading: boolean;
  token: string;
  isError: boolean;
}

const localStorageService  = new LocalStorageService();

export const initialAuthState: AuthInterface = {
  isLoading: false,
  token: localStorageService .getItem("token") ||  '',
  isError: false,
};

export const AuthReducer = createReducer(
  initialAuthState,
  on(loginRequest, (state) => {
    return { ...state, isLoading: true, isError: false };
  }),
  on(loginSuccess, (state, props) => {
    return { ...state, isLoading: false, isError: false, token: props.token };
  }),
  on(loginFailure, (state) => {
    return { ...state, isLoading: false, isError: true };
  })
);
