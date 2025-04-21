import './App.css';

import Header from './layouts/Header.jsx';
import AboutMe from './layouts/AboutMe.jsx';
import Conhecimento from './layouts/Conhecimento.jsx';

export default function App() {

  return (
    <div className='containerApp'>
      <Header/>
      <AboutMe/>
      <Conhecimento/>
    </div>
  )
}

