import './App.scss';
import { Footer } from './components/common/footer/Footer';
import { Header } from './components/common/header/Header';
import { HomePage } from './components/homePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Constructor } from './components/constructor/Constructor';
import { Catalog } from './components/catalog/Catalog';
import { AboutUsPage } from './components/aboutUsPage/AboutUsPage';
import { DesignDepPage } from './components/designDepPage/DesignDepPage';
import { ContuctPage } from './components/contuctPage/ContuctPage';
import { ShoppingCart } from './components/shoppingCart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/constructor" element={<Constructor />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/aboutUsPage" element={<AboutUsPage />} />
        <Route path="/designPage" element={<DesignDepPage />} />
        <Route path="/contuctPage" element={<ContuctPage />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
