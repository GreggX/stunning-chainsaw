import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import LinkedInIcon from "./LinkedInIcon";
import TwitterIcon from "./TwitterIcon";
import YouTubeIcon from "./YouTubeIcon";

export interface SocialLink {
  type: 'twitter' | 'facebook' | 'youtube' | 'linkedin' | 'instagram';
  url: string;
}

const SocialIcon: React.FC<{ type: SocialLink['type'] }> = ({ type }) => {
    switch (type) {
        case 'twitter': return <TwitterIcon />;
        case 'facebook': return <FacebookIcon />;
        case 'youtube': return <YouTubeIcon />;
        case 'linkedin': return <LinkedInIcon />;
        case 'instagram': return <InstagramIcon />;
        default: return null;
    }
};

export default SocialIcon;