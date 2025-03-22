import React from 'react'; // Import React library to use JSX and React features
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector hooks from react-redux for interacting with the Redux store
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Import action creators for managing cart operations (removing items, clearing the cart, increasing/decreasing item quantities)
import './ShoppingCart.css'; // Import CSS file for styling the ShoppingCart component

const ShoppingCart = () => {

  const dispatch = useDispatch(); // Initialize the useDispatch hook to dispatch actions to the Redux store
  const cartItems = useSelector(state => state.cart.cartItems); // Use useSelector to extract the cartItems array from the Redux store's state
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate the total amount by summing up the price * quantity of each item in the cart
  
  // Function to handle removing an item from the cart
  const handleRemoveItem = itemId => {
    dispatch(removeItemFromCart(itemId)); // Dispatch the removeItemFromCart action with the itemId to remove the specified item from the cart
  };
  
  // Function to handle clearing the entire cart
  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch the clearCart action to remove all items from the cart
  };

  // Function to handle increasing the quantity of a specific item in the cart
  const handleIncreaseQuantity = itemId => {
    dispatch(increaseItemQuantity(itemId)); // Dispatch the increaseItemQuantity action with the itemId to increase the quantity of the specified item
  };

  // Function to handle decreasing the quantity of a specific item in the cart
  const handleDecreaseQuantity = itemId => {
    dispatch(decreaseItemQuantity(itemId)); // Dispatch the decreaseItemQuantity action with the itemId to decrease the quantity of the specified item
  };

  return (
    <>
    <div className="shopping-cart"> {/* Main container for the shopping cart */}
      <h2 className="shopping-cart-title">Shopping Cart</h2> {/* Title of the shopping cart */}
      <ul className="cart-items"> {/* Unordered list to display each cart item */}
        {cartItems.map(item => ( // Map over the cartItems array to create a list item for each item in the cart
              <li key={item.id} className="cart-item"> {/* List item for each cart item, using item.id as the unique key */}
                <span>{item.name} - ${item.price}</span> {/* Display the item name and price */}
                <div className="quantity-controls"> {/* Container for quantity controls */}
                  <button 
                    className="quantity-control-btn" 
                    onClick={() => handleDecreaseQuantity(item.id)} // Call handleDecreaseQuantity when the "-" button is clicked, passing the item.id
                  >
                    -
                  </button>
                  <span> {item.quantity}</span> {/* Display the current quantity of the item */}
                  <button 
                    className="quantity-control-btn" 
                    onClick={() => handleIncreaseQuantity(item.id)} // Call handleIncreaseQuantity when the "+" button is clicked, passing the item.id
                  >
                    +
                  </button>
                </div>
                <button 
                  className="remove-item-btn" 
                  onClick={() => handleRemoveItem(item.id)} // Call handleRemoveItem when the "Remove" button is clicked, passing the item.id
                >
                  Remove
                </button>
              </li>
        ))}
      </ul>
      <button 
        className="clear-cart-btn" 
        onClick={handleClearCart} // Call handleClearCart when the "Clear Cart" button is clicked
      >
        Clear Cart
      </button>
    </div>
    <div>{totalAmount ? <div>The total amount is {totalAmount}</div> : ''}</div> {/* Display the total amount if it's greater than 0 */}
    </>
  );
};

export default ShoppingCart; // Export the ShoppingCart component as the default export