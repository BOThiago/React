import React from "react";
import "./Button.css"

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function Button({ onClick, children }: ButtonProps) {
  return (
    <button id="buttonState" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
