import './App.css';
import Header from './header'
import Features from './feature'
import Projects from './project';
import OpenProject from './openproject';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Features/>
      <Projects/>
      <OpenProject/>
      <Footer/>
    </div>
  );
}

export default App;
