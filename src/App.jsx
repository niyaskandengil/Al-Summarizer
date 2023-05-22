import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";


const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
        
      </div>
      <div className='app mt-24' style={{fontSize:12,fontWeight:"bold"}}>
        © 2023 Niyas Kandengil
      </div>
    </main>
  );
};

export default App;