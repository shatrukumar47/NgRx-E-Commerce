import { createAction, props } from "@ngrx/store";


export const loadProductsRequest = createAction("[Product] Load Products Request");

export const loadProductsSuccess = createAction("[Products] Load Products Success", props<{data: any}>());

export const loadProductsFailure = createAction("[Products] Load Products Failure");