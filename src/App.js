import Navbar from './component/navbar';
import Allrouter from './routing/allrouters';
import './App.css';
import Bottomnav from './component/bottomnav'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './component/footer';

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
