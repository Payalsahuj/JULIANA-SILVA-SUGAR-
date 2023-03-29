import Navbar from './routing/navbar';
import Allrouter from './routing/allrouters';
import './App.css';
import Bottomnav from './routing/bottomnav'
function App() {
  return (
    <div className="App">
       <Navbar/>
     
    <Allrouter/>
    <Bottomnav/>
   
    </div>
  );
}

export default App;
