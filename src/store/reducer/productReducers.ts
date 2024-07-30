import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TypeDataProduct {
    id: number
    title: string
    price: number
    description: string
    image: string
    category: string
}

export interface TypeInitialState {
    productData: TypeDataProduct[];
}

const initialState: TypeInitialState = {
    productData: []
}


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<TypeDataProduct[]>) => {
            state.productData = action.payload
            console.log("Data khi dispatch:  ",action.payload);
        },
        selectedProduct: (state, action: PayloadAction<TypeInitialState[]>) => {
            action.payload

        },
        removeSelectedProduct: (state, action: PayloadAction<TypeInitialState[]>) => {
            action.payload

        },
    }
})

export const { setProduct, selectedProduct, removeSelectedProduct } = productSlice.actions
const productReducer = productSlice.reducer
export default productReducer
