interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className = '' }) => {
  const baseClass = 'box';
  className = `${baseClass} ${className}`.trim();

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Box;