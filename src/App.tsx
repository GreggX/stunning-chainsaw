import { Navbar } from './components/Navbar'
import { Link } from './components/Link'

import './App.css'
import Landing from './views/Landing'

function App() {
  return (<>
    <Navbar
      ctaText="Get Started"
      onCtaClick={() => alert('CTA Clicked!')}
      title="Avantgard"
    >
      <Link active onClick={() => { }}>Inicio</Link>
      <Link>Sobre nosotros</Link>
      <Link>Contactanos</Link>
    </Navbar>
    <Landing />
  </>
  )
}

export default App
