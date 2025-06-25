import TeamHeader from "../../components/TeamHeader";
import TeamMemberCard, { TeamMemberCardProps } from "../../components/TeamMemberCard";

const TeamMembers = () => {
  const teamMembers: TeamMemberCardProps[] = [
    { name: 'Gerry Heller', role: 'Managing Director', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60', socials: [{ type: 'facebook', url: '#' }, { type: 'twitter', url: '#' }, { type: 'youtube', url: '#' }] },
    { name: 'Jonathan', role: 'Firm Director', imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60', socials: [{ type: 'facebook', url: '#' }, { type: 'twitter', url: '#' }, { type: 'youtube', url: '#' }] },
    { name: 'Daniel Nichol', role: 'Managing Partner', imageUrl: 'https://images.unsplash.com/photo-1627741493206-38f15857c9fb?w=500&auto=format&fit=crop&q=60', socials: [{ type: 'facebook', url: '#' }, { type: 'twitter', url: '#' }, { type: 'youtube', url: '#' }] },
    { name: 'Joseph Hyde', role: 'Tax Partner', imageUrl: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=500&auto=format&fit=crop&q=60', socials: [{ type: 'facebook', url: '#' }, { type: 'twitter', url: '#' }, { type: 'youtube', url: '#' }] },
    { name: 'Patricia Bogle', role: 'Chief Operating Officer', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60', socials: [{ type: 'facebook', url: '#' }, { type: 'twitter', url: '#' }, { type: 'youtube', url: '#' }] },
  ];

  // Splitting members to create the staggered column effect from the image
  const column1Members = [teamMembers[0], teamMembers[2], teamMembers[4]];
  const column2Members = [teamMembers[1], teamMembers[3]];

  return (
    <div className="bg-zinc-900 min-h-screen font-sans">
      <main className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row">
          <TeamHeader
            title="Nuestro equipo"
            subtitle="Miembros"
            description="El colaborar estrechamente con universidades y centros de investigación, fomenta una comunidad de conocimiento y aprendizaje continuo. Esta sinergia permite no solo el desarrollo de nuevas tecnologías, sino también la formación de futuros talentos."
          />

          {/* Team Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Column 1 */}
            <div className="space-y-8">
              {column1Members.map((member) => <TeamMemberCard key={member.name} {...member} />)}
            </div>
            {/* Column 2 - with a top margin on medium screens to create stagger */}
            <div className="space-y-8 md:mt-16">
              {column2Members.map((member) => <TeamMemberCard key={member.name} {...member} />)}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TeamMembers;