interface HeaderProps {
    supertitle: string;
    title: string;
}

/**
 * Header Component
 * Displays the main title and a smaller supertitle.
 * @param {HeaderProps} props - The supertitle and title text.
 */
const Header: React.FC<HeaderProps> = ({ supertitle, title }) => {
    return (
        <header className="mb-12 md:mb-16">
            <p className="text-gray-600 text-lg md:text-xl mb-2">{supertitle}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                {title}
            </h1>
        </header>
    );
};

export default Header;