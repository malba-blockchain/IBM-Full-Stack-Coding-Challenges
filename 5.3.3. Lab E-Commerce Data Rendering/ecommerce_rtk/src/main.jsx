import React from 'react'; // Import the React library to use React features like components and JSX
import ReactDOM from 'react-dom/client'; // Import ReactDOM to interact with the DOM and render the React app
import App from './App.jsx'; // Import the main App component, which serves as the root of the application
import './index.css'; // Import global styles for the application
import { Provider } from 'react-redux'; // Import the Provider component from react-redux to connect the Redux store to the React app
import store from './store.js'; // Import the configured Redux store to manage global state

// Create a root for the React app using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Wrap the app in React.StrictMode to enable additional checks and warnings for better development practices */}
    <Provider store={store}> {/* Wrap the app with the Provider component and pass the Redux store to make it available to all components */}
      <App /> {/* Render the main App component, which contains the rest of the application */}
    </Provider>
  </React.StrictMode>,
);