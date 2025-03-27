import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <Router>
                <App />
            </Router>
        </StrictMode>
    );
} else {
    console.error("Root element not found");
}
