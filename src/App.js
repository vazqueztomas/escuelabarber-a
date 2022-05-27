import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from './components/Hero';


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
    </div>
  );
}

export default App;
