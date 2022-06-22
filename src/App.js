import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import GamePage from './components/GamePage/GamePage';

function App() {
  return (
 
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/app/:title" element={<GamePage />} />
        </Routes>
      </div>
 
  );
}

export default App;
