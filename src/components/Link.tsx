import React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <div className="nav-item">
      <a
        href={href}
        className={`nav-link ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </div>
  )
}