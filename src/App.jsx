import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Players from './components/Players';
import NewsletterSubscription from './components/NewsletterSubscription';
import Footer from './components/Footer';
function App() {

  const [coin, setCoin] = useState(0);

  const [isAvailablePlayers, setIsAvailablePlayers] = useState({availablePlayers: true, status: "Available Players"});

  const handleIsAvailablePlayers = (status) => {
    if (status === "Available Players") {
      setIsAvailablePlayers({availablePlayers: true, status: "Available Players"});
    } else {
      setIsAvailablePlayers({availablePlayers: false, status: "Selected Players"})
    }
  }

  const handleAddCoin = () => {
    setCoin(100000000000);
  }

  return (
    <div className='sora-font'>
      <Navbar coin={coin}></Navbar>
      <Hero handleAddCoin={handleAddCoin}></Hero>
      <Players isAvailablePlayers={isAvailablePlayers} handleIsAvailablePlayers={handleIsAvailablePlayers} setCoin={setCoin}></Players>
      <NewsletterSubscription></NewsletterSubscription>
      <Footer></Footer>
    </div>
  )
}

export default App
