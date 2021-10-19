import { BrowserRouter, Switch, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import CartContextProvider from './context/cartContext';
import SearchContextProvider from "./context/searchContext";

import bannerSuelo from './assets/images/bannerSuelo.jpg'

import ItemListContainer from './components/Containers/ItemListContainer';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import Footer from "./components/Footer";

import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import CartForm from "./components/Cart/CartForm";

function App() {
  return (
    <CartContextProvider>
    <SearchContextProvider>
      <BrowserRouter>
        <div className="App">

          <header>
            <NavBar />
          </header>
          <main className="container justify-content-center">
          <a href="https://api.whatsapp.com/send?phone=542216901670" class="whatsapp" target="_blank">
          <svg class="whatsappSVG" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="300 -476.1 1792 1792">
            <path d="M1413 497.9c8.7 0 41.2 14.7 97.5 44s86.2 47 89.5 53c1.3 3.3 2 8.3 2 15 0 22-5.7 47.3-17 76-10.7 26-34.3 47.8-71 65.5s-70.7 26.5-102 26.5c-38 0-101.3-20.7-190-62-65.3-30-122-69.3-170-118s-97.3-110.3-148-185c-48-71.3-71.7-136-71-194v-8c2-60.7 26.7-113.3 74-158 16-14.7 33.3-22 52-22 4 0 10 .5 18 1.5s14.3 1.5 19 1.5c12.7 0 21.5 2.2 26.5 6.5s10.2 13.5 15.5 27.5c5.3 13.3 16.3 42.7 33 88s25 70.3 25 75c0 14-11.5 33.2-34.5 57.5s-34.5 39.8-34.5 46.5c0 4.7 1.7 9.7 5 15 22.7 48.7 56.7 94.3 102 137 37.3 35.3 87.7 69 151 101a44 44 0 0 0 22 7c10 0 28-16.2 54-48.5s43.3-48.5 52-48.5zm-203 530c84.7 0 165.8-16.7 243.5-50s144.5-78 200.5-134 100.7-122.8 134-200.5 50-158.8 50-243.5-16.7-165.8-50-243.5-78-144.5-134-200.5-122.8-100.7-200.5-134-158.8-50-243.5-50-165.8 16.7-243.5 50-144.5 78-200.5 134S665.3 78.7 632 156.4s-50 158.8-50 243.5a611 611 0 0 0 120 368l-79 233 242-77a615 615 0 0 0 345 104zm0-1382c102 0 199.5 20 292.5 60s173.2 93.7 240.5 161 121 147.5 161 240.5 60 190.5 60 292.5-20 199.5-60 292.5-93.7 173.2-161 240.5-147.5 121-240.5 161-190.5 60-292.5 60a742 742 0 0 1-365-94l-417 134 136-405a736 736 0 0 1-108-389c0-102 20-199.5 60-292.5s93.7-173.2 161-240.5 147.5-121 240.5-161 190.5-60 292.5-60z">
            </path>
            </svg>
          </a>
            <Switch>
              <Route exact path='/'>
                <div className="bannerContainer mt-5">
                  <img src={bannerSuelo} className="banner"/>
                </div>
                <h2 className="text-center my-5 py-2 fs-1 text-white bg-primary shadow">Alimentos que alimentan</h2>
                <ItemListContainer/>
              </Route>

              <Route path='/categories/:idCategory' component={ItemListContainer} />
              
              <Route exact path='/item/:id'>
                  <ItemDetailContainer/>
              </Route>

              <Route exact path='/cart' component={Cart}/> 

              <Route exact path='/cartForm' component={CartForm}/>
            </Switch>

          </main>    
          <footer>
              <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </SearchContextProvider>
    </CartContextProvider>  
  );
}

export default App;
