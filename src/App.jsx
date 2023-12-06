import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, Footer } from './components';

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <div className="relative z-0 bg-primary">
            <Navbar />
            <Hero />
            <About />
            <Tech />
            <Works />
            <Experience />
            <Contact />
            <Footer /> 
          </div>
        </BrowserRouter>
    </div>
  )
}

export default App
