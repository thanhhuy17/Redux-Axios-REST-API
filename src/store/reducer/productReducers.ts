import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeInitialState = {
    id: string
    name: string
    price: number
}

const initialState: TypeInitialState[] = [{
    id: "1", name: "T-shirt", price: 5
}]


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<TypeInitialState[]>) => {
            action.payload
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
