import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "transparent";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <div className="button-container">
      <button
        className={`button ${variant} ${disabled ? "disabled" : ""}`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
