import Container from "../components/Container"
import Footer from "./LandingSections/Footer"
import HeroSection from "./LandingSections/HeroSection"
import TeamMembers from "./LandingSections/TeamMembers"
import WeAre from "./LandingSections/WeAre"

const Landing = () => {
  return (
    <Container className="flex flex-col">
      <HeroSection />
      <WeAre />
      <TeamMembers />
      <Footer />
    </Container>
  )
}

export default Landing;
