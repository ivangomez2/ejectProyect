import logo from './imgs/fondo.jpg';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import Methods from './Components/Methods/Methods';

function App() {
  return (
    <div className="App">
   <div style={{position:"absolute"}}>
   <SideBar />
   </div>

   <Methods />
 
    </div>
  );
}

export default App;
