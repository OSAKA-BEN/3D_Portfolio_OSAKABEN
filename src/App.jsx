import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components';


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
          </div>
        </BrowserRouter>
    </div>
  )
}

export default App
