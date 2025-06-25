import ArrowRightIcon from "./Icons/ArrowRightIcon";

export interface InfoCardProps {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl?: string;
}

/**
 * InfoCard Component
 * A reusable card component to display an image, title, description, and a link arrow.
 * @param {InfoCardProps} props - The data for the card.
 */
const InfoCard: React.FC<InfoCardProps> = ({
  imageUrl,
  title,
  description,
  linkUrl = '#',
}) => {
  return (
    <a 
      href={linkUrl}
      className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // prevent infinite loop
            target.src = `https://placehold.co/600x400/e2e8f0/4a5568?text=Image+Not+Found`;
          }}
        />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 flex-grow mb-4">{description}</p>
        <div className="mt-auto self-end">
            <div className="text-gray-400 group-hover:text-black transition-colors duration-300">
                <ArrowRightIcon />
            </div>
        </div>
      </div>
    </a>
  );
};

export default InfoCard;