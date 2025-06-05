import { useState } from 'react';
import './App.css';
import { Background } from './components/Background/Background.jsx';
import { Navbar }     from './components/NavBar/Navbar.jsx';
import Hero           from './components/Hero/hero.jsx';

const App = () => {
  let heroData = [
    {text1: "Dive into", text2: "What you love"},
    {text1: "Indulge",text2: "your passion"},
    {text1: "Give in to",text2: "your passion"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App
