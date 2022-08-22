import logo from './imgs/fondo.jpg';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import Methods from './Components/Methods/Methods';
import MethodListContainer from './Components/Methods/MethodListContainer';
import Contact from './Components/Contact/Contact';
import ContactText from './Components/Contact/ContactText';
import Carrousel from './Components/Carrousel/Carrousel';
import { Menu } from 'react-pro-sidebar';
import Menus from './Components/Menu/Menus';



function App() {
  return (
    <div className="App">
    <Menus />
    <MethodListContainer />
    </div>
  );
}

export default App;
