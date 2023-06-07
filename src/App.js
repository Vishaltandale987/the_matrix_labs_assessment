
import { NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import { Button } from '@chakra-ui/button';
import All_Routes from './Routes/All_Routes';
import Footer from './components/Home/Footer';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
  return (
    <div className="App">
  
     <Home/>
     <Footer/>


    </div>
  );
}

export default App;
