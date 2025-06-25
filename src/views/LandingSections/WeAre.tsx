import Header from "../../components/Header";
import InfoCard from "../../components/InfoCard";
import { CARD_DATA } from "../../utils/constants";

const WeAre = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <main className="container mx-auto px-6 py-12 md:py-20">
        <Header
          supertitle="Sobre nosotros"
          title="Nuestra misión es clara: transformar el mundo a través de la innovación tecnológica."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARD_DATA.map((card, index) => (
            <InfoCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default WeAre;
