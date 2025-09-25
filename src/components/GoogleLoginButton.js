import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function GoogleLoginButton({ onSuccess, onFailure }) {
  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onError={onFailure}
    />
  );
}

export default GoogleLoginButton;
