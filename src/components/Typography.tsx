interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'p',
}) => {
  const baseClassName = {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
    p: 'text-base',
  };


  const Tag = variant;

  return <Tag className={baseClassName[variant]}>{children}</Tag>;
};

export default Typography;
