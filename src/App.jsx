import './App.scss';
import { Footer } from './components/common/footer/Footer';
import { Header } from './components/common/header/Header';
import { HomePage } from './components/homePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Constructor } from './components/constructor/Constructor';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/constructor" element={<Constructor />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
