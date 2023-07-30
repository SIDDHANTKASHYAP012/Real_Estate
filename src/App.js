import './App.css';
import './index.css';
import Header from './component/Header/header';
import Hero from './component/Hero/hero';
import Companies from './component/Companies/companies';
import Residencies from './component/Residencies/Residencies';
import Value from './component/Value/Value';
import Contact from './component/Contact/Contact';
import GetStarted from './component/Getstarted/GetStarted';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
    <div>
      <div className="white-gradient"/>
        <Header/>
        <Hero/>
        </div>
        <Companies/>
        <Residencies/>
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer/>
        </div>
  );
}

export default App;
