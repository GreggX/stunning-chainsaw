import Box from "../components/Box"
import Button from "../components/Button"
import Container from "../components/Container"
import Typography from "../components/Typography"

const Landing = () => {
  return (
    <Container className="flex flex-col">
      <Box>
        <Typography>Somos</Typography>
        <Typography variant="h1">Avantgard Robotics</Typography>
        <Typography variant="p">Creamos soluciones innovadoras que mejoran la calidad de vida de las personas en México.</Typography>
        <Box className="flex flex-row">
          <Button variant="transparent" label="Saber más" onClick={() => { }}></Button>
          <Button variant="transparent" label="Contactanos" onClick={() => { }}></Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Landing;
