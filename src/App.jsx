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
import { ProductionPage } from './components/productionPage/ProductionPage';
import { Cooperation } from './components/cooperationPage/Cooperation';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/constructor" element={<Constructor />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/design" element={<DesignDepPage />} />
        <Route path="/contuct" element={<ContuctPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/production" element={<ProductionPage />} />
        <Route path="/cooperation" element={<Cooperation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
