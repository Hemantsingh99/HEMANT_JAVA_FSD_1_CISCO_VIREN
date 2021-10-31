import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
//import assets from './assets'
//import Home  from './components/Home';

function App() {
  return (
    <div className="App">
      <assets/>
      <NavbarComp /><br/>
      <Footer/>
    </div>
  );
}

export default App;