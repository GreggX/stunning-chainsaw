import React from "react";

interface NavbarProps {
  title: string | React.ReactNode;
  ctaText: string;
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  title,
  ctaText,
  onCtaClick,
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-item">{title}</span>
        <button className="button is-primary" onClick={onCtaClick}>
          {ctaText}
        </button>
        <h1 className="">My Application</h1>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#home">Inicio</a>
          <a className="navbar-item" href="#about">Sobre nosotros</a>
          <a className="navbar-item" href="#contact">Contactanos</a>
        </div>
        <div className="navbar-end">
          <a className="navbar-item" href="#login">Login</a>
          <a className="navbar-item" href="#signup">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}