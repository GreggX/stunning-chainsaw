import React from "react";
import useScroll from "../hooks/useScroll";
import Button from "./Button";

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
          <span className="navbar-title">{
            typeof title === 'string'
              ? title.toUpperCase()
              : <>{title}</>
          }</span>
        </div>

        <div className="navbar-menu">
          {children && (children)}
        </div>

        <div className="navbar-footer">
          <Button
            label={ctaText}
            onClick={onCtaClick}
            variant="secondary"
          />
        </div>
      </div>
    </nav>
  );
}