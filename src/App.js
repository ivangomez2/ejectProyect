import logo from './imgs/fondo.jpg';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import Methods from './Components/Methods/Methods';
import MethodListContainer from './Components/Methods/MethodListContainer';
import MethodList from './Components/Methods/MethodList';

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
