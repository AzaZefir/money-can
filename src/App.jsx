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
import { getDocs, collection, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FulfillmentPage } from './components/fulfilmentPage/FulfillmentPage';
import ContactLinks from './components/common/contactLinks/ContactLinks';
import { NotFound } from './components/common/notFound/NotFound';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from './redux/slices/filterSlice';

function App() {
  //   const dispatch = useDispatch()
  //   const categoryFilter = useSelector(state=> state.filter.categoryId)
  // console.log(categoryFilter)
  const [catalogItems, setCatalogItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('');
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [activeSort, setActiveSort] = useState({
    name: 'популярности',
    type: 'rating',
  });
  const [searchQuary, setSearchQuary] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const clothesCollectionRef = collection(db, 'catalogItems');

  // filter category items
  const filterPizzas = (el) => {
    // dispatch(setCategoryId(id))

    if (el === '') {
      setCatalogItems(filteredCategory);
      return;
    }
    const result = filteredCategory.filter((item) => {
      return item.category === el;
    });
    setCatalogItems(result);
    console.log(result);
  };

  const searchedCatalogItems = catalogItems.filter((item) => {
    return !!item.title.toLowerCase().includes(searchQuary.toLowerCase());
  });

  useEffect(() => {
    setIsLoading(true);
    const getCatalogItems = async () => {
      try {
        const data = await getDocs(
          query(clothesCollectionRef, orderBy('category', 'desc')),
        );
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCatalogItems(filteredData);
        setFilteredCategory(filteredData);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getCatalogItems();
  }, [searchQuary, currentPage]);

  return (
    <div className="App">
      <Header />
      <ContactLinks />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/constructor" element={<Constructor />} />
        <Route
          path="/catalog"
          element={
            <Catalog
              activeSort={activeSort}
              setActiveSort={setActiveSort}
              catalogItems={catalogItems}
              setCatalogItems={setCatalogItems}
              isLoading={isLoading}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              filterPizzas={filterPizzas}
              searchQuary={searchQuary}
              setSearchQuary={setSearchQuary}
              searchedCatalogItems={searchedCatalogItems}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/design" element={<DesignDepPage />} />
        <Route path="/contact" element={<ContuctPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/production" element={<ProductionPage />} />
        <Route path="/cooperation" element={<Cooperation />} />
        <Route path="/fulfillment" element={<FulfillmentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
