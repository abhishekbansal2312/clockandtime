import React from "react";
import ReactDOM from "react-dom/client"; // Make sure you're using the correct ReactDOM import for React 18
import App from "./App"; // Import your main App component
import "./index.css"; // Optional: your CSS file

// Create a root element and render the app
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Define 'root' properly

// Render your main App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
