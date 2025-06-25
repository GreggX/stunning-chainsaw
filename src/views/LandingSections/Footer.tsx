import SocialIcon, { SocialLink } from "../../components/Icons/SocialIcon";


interface FooterLink {
  text: string;
  url: string;
}

const Footer: React.FC = () => {
  const footerLinks: FooterLink[] = [
    { text: 'Sobre nosotros', url: '#' },
    { text: 'Ubicación', url: '#' },
    { text: 'Proyectos', url: '#' },
    { text: 'Contacto', url: '#' },
  ];

  const socialLinks: SocialLink[] = [
    { type: 'linkedin', url: '#' },
    { type: 'facebook', url: '#' },
    { type: 'twitter', url: '#' },
    { type: 'instagram', url: '#' },
  ];

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    if (email) {
      console.log(`Subscribing ${email}...`);
      alert(`Gracias por subscribirte, ${email}!`);
      e.currentTarget.reset();
    }
  }

  return (
    <footer className="bg-zinc-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5 lg:col-span-4">
            <h2 className="text-4xl font-black mb-4">AVANTGARD</h2>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-white text-gray-900 px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
              />
              <button type="submit" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-r-md hover:bg-yellow-500 transition-colors duration-300">
                Subscribirse
              </button>
            </form>
          </div>

          <div className="hidden md:block md:col-span-2 lg:col-span-4"></div>

          <div className="md:col-span-5 lg:col-span-4">
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.text}>
                  <a href={link.url} className="hover:text-yellow-400 transition-colors duration-300 text-lg">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Energetic Themes • All Rights Reserved</p>
          <div className="flex items-center space-x-4">
            {socialLinks.map(link => (
              <a key={link.type} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-300 border border-gray-700 rounded-full p-2 hover:border-white">
                <span className="sr-only">{link.type}</span>
                <SocialIcon type={link.type} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;