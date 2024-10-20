import ReactDOM from "react-dom/client";
import React from "react";
// import App from './App.jsx'
import './index.css'
import Router from './router.jsx'
import { ClerkProvider } from "@clerk/clerk-react";
// import Test from "./Component/test.jsx";


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
     {/* <Test/> */}
    <Router/>
    {/* <App/> */}
    </ClerkProvider>
  </React.StrictMode>
)
