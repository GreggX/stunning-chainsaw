import React from "react";

interface LinkProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  target?: "_blank" | "_self";
  rel?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = "",
  onClick,
  target = "_self",
  rel = "noopener noreferrer",
}) => {

  if (onClick) {
    return (
      <div className="nav-item">
        <a
          className={`nav-link ${className}`}
          onClick={onClick}
          rel={rel}
        >
          {children}
        </a>
      </div>
    )
  }

  return (
    <div className="nav-item">
      <a
        href={href}
        className={`nav-link ${className}`}
        target={target}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </div>
  )
}