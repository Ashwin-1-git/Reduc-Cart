import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        // addtoCart
        addToCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainigProducts = state.filter(item=>item.id!=existingProduct.id)
                state= [...remainigProducts,existingProduct]
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }

        },
        // remove cart item,action payload has product id
        removeCartItem:(state,action)=>{
           return state.filter(item=>item.id!=action.payload)
        },
        // increment quantity action payload has product
        incrementCartItem:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainigProducts = state.filter(item=>item.id!=existingProduct.id)
            state = [...remainigProducts,existingProduct]
        },
        // decrement quantity action payload has product
        decrementCartItem:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainigProducts = state.filter(item=>item.id!=existingProduct.id)
            state = [...remainigProducts,existingProduct]
        },
        emptyCart:(state)=>{
            return []
        }
    }
})

export const {addToCart,removeCartItem,incrementCartItem,decrementCartItem,emptyCart} = cartSlice.actions
export  default cartSlice.reducer