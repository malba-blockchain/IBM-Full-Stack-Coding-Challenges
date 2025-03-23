import React from 'react'; // Import React library to use JSX and React features
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector hooks from react-redux for interacting with the Redux store
import {useState, useEffect } from "react";

const SuperCoin = () => {

    const [superCoins , setSuperCoins] = useState(0); 
    const cartItems = useSelector(state => state.cart.cartItems); // Use useSelector to extract the cartItems array from the Redux store's state
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate the total amount by summing up the price * quantity of each item in the cart

    useEffect(() => {
        if (totalAmount >= 100 && totalAmount < 200) {
        setSuperCoins(10);
        } else if (totalAmount >= 200 && totalAmount < 300) {
        setSuperCoins(20);
        } else if (totalAmount >= 300) {
        setSuperCoins(30);
        } else {
        setSuperCoins(0);
        }
    }, [totalAmount]);

    return (
    <>
        <div className="super-coins" style={{textAlign:'center'}}>
        <h2 className="super-coins-title">Super Coins</h2>
        <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
        </div>
    </>
  );

};

export default SuperCoin; // Export the SuperCoin component as the default export