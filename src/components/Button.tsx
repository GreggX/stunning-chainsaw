interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'solid' | 'outline';
  href?: string;
  className?: string;
}

/**
 * Reusable Button Component
 * Can be rendered as a solid or outline button.
 */
const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'solid', href, className = '' }) => {
  const baseClasses = "font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out text-center inline-block";
  const variantClasses = {
    solid: "bg-yellow-400 text-black hover:bg-yellow-500",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
