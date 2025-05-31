import React from "react";

interface NavbarProps {
  title: string;
  ctaText: string;
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  title,
  ctaText,
  onCtaClick,
}) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl">My Application</h1>
    </nav>
  );
}