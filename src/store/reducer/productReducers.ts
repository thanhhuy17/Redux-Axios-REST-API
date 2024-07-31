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
    proNumber: number
}

const initialState: TypeInitialState = {
    productData: [],
    proNumber: 0
}


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<TypeDataProduct[]>) => {
            state.productData = action.payload
            // console.log("Data khi dispatch:  ", action.payload);
        },
        addProduct: (state, action) => {
            state.proNumber = action.payload
            console.log("Kiem tra so luong dc ban qua reducer: ",action.payload);
        },
        removeSelectedProduct: (state, action: PayloadAction<TypeInitialState[]>) => {
            action.payload

        },
    }
})

export const { setProduct, addProduct, removeSelectedProduct } = productSlice.actions
const productReducer = productSlice.reducer
export default productReducer
