import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit to set up the Redux store
import cartReducer from './Components/CartSlice'; // Import the cartReducer from the CartSlice file to manage cart-related state

// Create the Redux store using configureStore
const store = configureStore({
  reducer: {
    cart: cartReducer, // Register the cartReducer under the 'cart' key in the Redux store
  },
});

export default store; // Export the configured store as the default export for use in the application