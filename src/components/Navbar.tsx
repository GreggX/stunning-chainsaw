import React from "react";
import useScroll from "../hooks/useScroll";

interface NavbarProps {
  title: string | React.ReactNode;
  ctaText: string;
  onCtaClick: () => void;
  children?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({
  title,
  ctaText,
  onCtaClick,
  children,
}) => {
  const scrollPosition = useScroll();

  return (
    <nav className={`navbar ${scrollPosition > 50 ? 'navbar-fixed' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="navbar-item">{title}</span>
        </div>

        <div className="navbar-menu">
          {children && (children)}
        </div>

        <div className="navbar-footer">
          <button className="button is-primary" onClick={onCtaClick}>
            {ctaText}
          </button>
        </div>
      </div>
    </nav>
  );
}