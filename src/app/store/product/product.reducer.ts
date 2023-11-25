import { createReducer, on } from "@ngrx/store"
import { loadProductsFailure, loadProductsRequest, loadProductsSuccess } from "./product.actions"
import { initialProductState } from "./product.state"



export const productReducer = createReducer(
    initialProductState,
    on(loadProductsRequest, (state)=>{
        return {...state, isLoading: true, isError: false}
    }),
    on(loadProductsSuccess, (state, props)=>{
        return {...state, isLoading: false, data:props.data}
    }),
    on(loadProductsFailure, (state)=>{
        return {...state, isLoading: false, isError: true}
    })
)