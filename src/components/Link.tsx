import React from "react";

interface LinkProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  active?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = "",
  target = "_self",
  rel = "noopener noreferrer",
  active = false,
  onClick,
}) => {

  if (onClick) {
    return (
      <div className="nav-item">
        <a
          className={`nav-link ${className} ${active ? "active" : ""}`}
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