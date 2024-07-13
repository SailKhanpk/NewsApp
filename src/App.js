import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import Footer from './components/Footer'

function App() {
  const [category,setCategory] = useState("general")
  return (
    <div className="App">
      <header>
       <Navbar setCategory={setCategory}/>
      </header>
      <NewsBoard category={category}/>
      
      <Footer/>
      
    </div>
  );
}

export default App;
