// // import {IncreaseById} from '../Context/action';

// const initialStates = {
//     products : []
// }
//  const cartReducer = (state  = initialStates, action) =>{
//     switch(action.type){
//         case 'INCREASE_ID' :
//             return{
//                 ...state,
//                 products : state.products.map((items)=>{
//                     if(items.id === action.payload.productId){
//                         return {...items, quantity : items.quantity + 1}
//                     }
//                     return items
//                 })
//             }
//     }
// }

// export default cartReducer

// reducer.js
const initialState = {
  products: [], // Initialize with an empty array
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_ID":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.productId) {
            // Increase the quantity of the matching product
            return { ...product, quantity: (product.quantity += 1) };
          }
          return product;
        }),
      };

    case "DECREASE_ID":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.productId) {
            // Decrease the quantity of the matching product, but not below 0
            const newQuantity = Math.max(product.quantity - 1, 0);
            return { ...product, quantity: newQuantity };
          }
          return product;
        }),
      };

    // Handle other actions...
    default:
      return state;
  }
};

export default cartReducer;
