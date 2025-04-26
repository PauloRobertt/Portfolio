import './App.css';

import Header from './layouts/Header.jsx';
import AboutMe from './layouts/AboutMe.jsx';
import Conhecimento from './layouts/Conhecimento.jsx';
import Projetos from './layouts/Projetos.jsx';
import Contato from './layouts/Contato.jsx';
import Footer from './layouts/Footer.jsx';

export default function App() {

  return (
    <div className='containerApp'>
      <Header />
      <AboutMe />
      <Conhecimento />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  )
}

