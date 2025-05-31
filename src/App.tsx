import { Navbar } from './components/Navbar'
import { Link } from './components/Link'

import './App.css'

function App() {
  return (
    <Navbar ctaText="Get Started" onCtaClick={() => alert('CTA Clicked!')} title="My Application">
      <Link>Inicio</Link>
      <Link>Sobre nosotros</Link>
      <Link>Contactanos</Link>
    </Navbar>
  )
}

export default App
