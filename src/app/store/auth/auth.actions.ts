import { createAction, props } from "@ngrx/store";

export const loginRequest = createAction("[Auth] Login Request", props<{email:string, password: string}>())
export const loginSuccess = createAction("[Auth] Login Success", props<{token: string}>())
export const loginFailure = createAction("[Auth] Login Request")