import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";


const App = () => {
  return (
    <main style={{position:'relative'}}>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
        
      </div>
      <div className='app' style={{fontSize:12,fontWeight:"bold",bottom:'-10px'}}>
        © 2023 Niyas Kandengil
      </div>
    </main>
  );
};

export default App;