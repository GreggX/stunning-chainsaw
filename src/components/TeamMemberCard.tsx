import SocialIcon, { SocialLink } from "./Icons/SocialIcon";

export interface TeamMemberCardProps {
  imageUrl: string;
  name: string;
  role: string;
  socials: SocialLink[];
}

/**
 * TeamMemberCard Component
 * Displays a card with a team member's photo, name, role, and social links.
 */
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageUrl, name, role, socials }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full">
        <img
            src={imageUrl}
            alt={`Photo of ${name}`}
            className="w-full h-64 object-cover object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null; // prevent infinite loop
              target.src = `https://placehold.co/400x400/e2e8f0/4a5568?text=Image`;
            }}
        />
        <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
            <p className="text-gray-500 mb-4">{role}</p>
            <div className="flex items-center space-x-4">
                {socials.map((social) => (
                    <a
                        key={social.type}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-800 transition-colors duration-300"
                    >
                        <span className="sr-only">{social.type}</span>
                        <SocialIcon type={social.type} />
                    </a>
                ))}
            </div>
        </div>
    </div>
);

export default TeamMemberCard;