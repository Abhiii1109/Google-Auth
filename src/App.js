import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "./components/GoogleLoginButton";
import "./App.css";

function App() {
  const handleLoginSuccess = (response) => {
    console.log("✅ Login Success:", response);

    // Get JWT token
    const token = response.credential;
    console.log("Google ID Token:", token);

    // Optionally decode token (see utils/auth.js)
    // const userInfo = decodeJwt(token);
    // console.log("User Info:", userInfo);
  };

  const handleLoginFailure = (error) => {
    console.log("❌ Login Failed:", error);
  };

  return (
    <GoogleOAuthProvider clientId="851443284617-92a3pafvnukc7tdcidighjo5gidrja1p.apps.googleusercontent.com">
      <div className="container">
        <h1>Google Authentication</h1>
        <GoogleLoginButton
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
