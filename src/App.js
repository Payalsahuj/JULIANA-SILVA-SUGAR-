import Navbar from './routing/navbar';
import Allrouter from './routing/allrouters';
import './App.css';
import Bottomnav from './routing/bottomnav'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './routing/footer';
function App() {
  return (
    <div className="App">
       <Navbar/>
    <Bottomnav />
    <Allrouter/>
    <Footer/>
    </div>
  );
}

export default App;
