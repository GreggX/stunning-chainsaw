import Button from "../../components/Button";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      ></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-xl">
          <p className="text-yellow-400 font-bold text-lg mb-2">Somos</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-wide leading-tight mb-4">
            Avantgard Robotics
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Creamos soluciones innovadoras que mejoran la calidad de vida de las personas en México.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="outline" href="#">Saber más</Button>
            <Button variant="solid" href="#">Contactanos</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
