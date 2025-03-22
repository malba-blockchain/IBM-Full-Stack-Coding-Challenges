import { createSlice } from '@reduxjs/toolkit'; // Import createSlice from Redux Toolkit to manage state and actions in a simpler way

// Define the initial state of the cart
const initialState = {
    cartItems: [], // Start with an empty array for cart items
};

// Create a slice of the Redux store for managing cart-related state and actions
const CartSlice = createSlice({
    name: 'cart', // Name of the slice (used as a prefix for action types)
    initialState, // Initial state of the cart
    reducers: {
        // Action to add an item to the cart
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id); // Check if the item already exists in the cart
            if (existingItem) {
                existingItem.quantity += 1; // If it exists, increase its quantity by 1
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 }); // If it doesn't exist, add it to the cart with an initial quantity of 1
            }
        },
        // Action to remove an item from the cart
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload); // Filter out the item with the matching ID from the cart
        },
        // Action to clear all items from the cart
        clearCart(state) {
            state.cartItems = []; // Reset the cartItems array to an empty array
        },
        // Action to increase the quantity of a specific item in the cart
        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload); // Find the item with the matching ID
            if (itemToIncrease) {
                itemToIncrease.quantity += 1; // If found, increase its quantity by 1
            }
        },
        // Action to decrease the quantity of a specific item in the cart
        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload); // Find the item with the matching ID
            if (itemToDecrease && itemToDecrease.quantity > 1) { // Ensure the item exists and its quantity is greater than 1
                itemToDecrease.quantity -= 1; // If conditions are met, decrease its quantity by 1
            }
        },
    },
});

// Export individual action creators for use in components
export const {
    addItemToCart, // Action to add an item to the cart
    removeItemFromCart, // Action to remove an item from the cart
    clearCart, // Action to clear all items from the cart
    increaseItemQuantity, // Action to increase the quantity of a specific item
    decreaseItemQuantity, // Action to decrease the quantity of a specific item
} = CartSlice.actions;

// Export the reducer function to be used in the Redux store configuration
export default CartSlice.reducer;