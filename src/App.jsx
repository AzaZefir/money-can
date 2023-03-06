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
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FulfillmentPage } from './components/fulfilmentPage/FulfillmentPage';
function App() {
  const [catalogItems, setCatalogItems] = useState([]);

  const clothesCollectionRef = collection(db, 'catalogItems');

  useEffect(() => {
    const getCatalogItems = async () => {
      try {
        const data = await getDocs(clothesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // console.log(filteredData);
        setCatalogItems(filteredData);
      } catch (err) {
        console.log(err);
      }
    };
    getCatalogItems();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/constructor" element={<Constructor />} />
        <Route path="/catalog" element={<Catalog catalogItems={catalogItems}/>} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/design" element={<DesignDepPage />} />
        <Route path="/contact" element={<ContuctPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/production" element={<ProductionPage />} />
        <Route path="/cooperation" element={<Cooperation />} />
        <Route path="/fulfillment" element={<FulfillmentPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
