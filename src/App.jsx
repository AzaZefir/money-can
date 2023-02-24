import './App.scss';
import { Footer } from './components/common/footer/Footer';
import { Header } from './components/common/header/Header';
import { HomePage } from './components/homePage/HomePage';


function App() {
  
  return (
    <div className="App">
       <Header/>
       <HomePage/>
       <Footer/>
    </div>
  );
}

export default App;
