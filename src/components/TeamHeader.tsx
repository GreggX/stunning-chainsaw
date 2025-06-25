interface TeamHeaderProps {
    title: string;
    subtitle: string;
    description: string;
}

/**
 * TeamHeader Component
 * Displays the title, subtitle, and description for the team section.
 */
const TeamHeader: React.FC<TeamHeaderProps> = ({ title, subtitle, description }) => (
    <div className="lg:w-1/3 lg:pr-12 mb-12 lg:mb-0">
        <h2 className="text-3xl font-bold text-gray-100">{title}</h2>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">{subtitle}</h1>
        <p className="text-gray-100 text-lg leading-relaxed">
            {description}
        </p>
    </div>
);

export default TeamHeader;