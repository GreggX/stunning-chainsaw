const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
  flex?: boolean;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  gap?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  overflow?: 'hidden' | 'visible' | 'auto' | 'scroll';
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  zIndex?: number;
}> = ({ children, className = '' }) => {
  // Combine the base class with any additional classes passed in
  const baseClass = 'container mx-auto px-4';
  className = `${baseClass} ${className}`.trim();
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
}

export default Container;