export interface ProductState {
    isLoading: boolean;
    data: any;
    isError: boolean;
  }
  
  export const initialProductState: ProductState = {
    isLoading: false,
    data: [],
    isError: false
  };
