import React from 'react'; // Import React library to use JSX and React features
import './ProductList.css'; // Import CSS file for styling the ProductList component
import { useDispatch } from 'react-redux'; // Import useDispatch hook from react-redux to dispatch actions to the Redux store
import { useState } from 'react'; // Import useState hook from React to manage local component state
import { addItemToCart } from './CartSlice'; // Import the addItemToCart action creator from CartSlice to update the cart in the Redux store

const ProductList = () => {
  
  const dispatch = useDispatch(); // Initialize the useDispatch hook to dispatch actions to the Redux store
  
  // State to keep track of products that have been added to the cart (disabled buttons)
  const [disabledProducts, setDisabledProducts] = useState([]); 
  
  // Array of product objects containing id, name, and price
  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  // Function to handle adding a product to the cart
  const handleAddToCart = product => {
    dispatch(addItemToCart(product)); // Dispatch the addItemToCart action with the selected product to update the Redux store
    setDisabledProducts([...disabledProducts, product.id]); // Update the disabledProducts state by adding the current product's id to the array
  };
  
  return (
    <div className="product-list"> {/* Main container for the product list */}
      <h2 className="product-list-title">Products</h2> {/* Title of the product list */}
      <ul className="product-list-items"> {/* Unordered list to display each product */}
      {products.map(product => ( // Map over the products array to create a list item for each product
        <li key={product.id} className="product-list-item"> {/* List item for each product, using product.id as the unique key */}
        <span>{product.name} - ${product.price}</span> {/* Display the product name and price */}
        <button
          className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`} // Add 'disabled' class if the product is already in the cart
          onClick={() => handleAddToCart(product)} // Call handleAddToCart function when the button is clicked, passing the current product
          disabled={disabledProducts.includes(product.id)} // Disable the button if the product id is in the disabledProducts array
        >
          Add to Cart {/* Button text */}
        </button>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default ProductList; // Export the ProductList component as the default export