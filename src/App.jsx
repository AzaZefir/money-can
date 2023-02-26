import './App.scss';
import { Footer } from './components/common/footer/Footer';
import { Header } from './components/common/header/Header';
import { HomePage } from './components/homePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Constructor } from './components/constructor/Constructor';
import { Catalog } from './components/catalog/Catalog';
import { AboutUsPage } from './components/aboutUsPage/AboutUsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/constructor" element={<Constructor />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/aboutUsPage" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
