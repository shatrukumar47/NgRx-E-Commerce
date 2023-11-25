import { AuthInterface, initialAuthState } from "./auth/auth.reducer";
import { ProductState, initialProductState } from "./product/product.state";


export interface AppState{
    products: ProductState,
    auth: AuthInterface
}

export const initialAppState: AppState = {
    products: initialProductState,
    auth: initialAuthState
}