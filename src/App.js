import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Pricing from './components/Pricing/Pricing';
import Benefits from './components/Benefits/Benefits';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Programs></Programs>
      <Benefits></Benefits>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
