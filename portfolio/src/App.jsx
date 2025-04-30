import './App.css';

import Header from './layouts/Header/Header.jsx';
import AboutMe from './layouts/AboutMe/AboutMe.jsx';
import Conhecimento from './layouts/Conhecimento/Conhecimento.jsx';
import Projetos from './layouts/Projetos/Projetos.jsx';
import Contato from './layouts/Contato/Contato.jsx';
import Footer from './layouts/Footer/Footer.jsx';

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

