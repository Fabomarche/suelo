import { BrowserRouter, Switch, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import CartContextProvider from './context/cartContext';
import SearchContextProvider from "./context/searchContext";

import bannerSuelo from './assets/images/bannerSuelo.jpg'

import ItemListContainer from './components/Containers/ItemListContainer';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

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
            <WhatsappButton />

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
