import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-g1jqf6lphxcwnvji.us.auth0.com"
     clientId="tT3xzSg4GfeJNKATFM8NxDqHaBBBCxOX"
     authorizationParams={{
      redirect_uri: "https://realestate-4gpm.vercel.app/"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
