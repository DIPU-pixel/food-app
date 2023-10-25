import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState: {
        items:[],
    },
    reducers:{
        addItems: (state,action) => {
            state.items.push({item:action.payload,quantity: 1})
        },
        removeAllItem :(state)=>{
            state.items=[]
        },
        removeBYIndex:(state,action)=>{
            state.items=
           state.items.filter((itemID)=>itemID.item.id!== action.payload.id)
        },
        decreseItemOne:(state,action)=>{
                const { id } = action.payload;
                const itemToDecrease = state.items.find(
                  (cartItem) => cartItem?.item?.id === id
                );          
                if (itemToDecrease && itemToDecrease.quantity > 1) {
                  itemToDecrease.quantity -=1;
                }
        },
        increseItemByOne:(state,action)=>{
            const { id } = action.payload;
            
            const itemToIncrease = state.items.find(
              (cartItem) => cartItem?.item?.id === id
            );
            if (itemToIncrease) {
              itemToIncrease.quantity += 1;
            }
        }
    }
})

export const selectItemsInCart = ({ cart }) => cart?.items;
export const selectTotalPrice = ({ cart }) => {
    console.log(cart);
    return cart?.items.reduce((total, cartItem) => {
      return total + cartItem.item.price * cartItem.quantity;
    }, 0);
  };
export const {addItems, removeAllItem,removeBYIndex,decreseItemOne,increseItemByOne}=CartSlice.actions;
export default CartSlice.reducer;