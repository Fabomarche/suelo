import { BrowserRouter, Switch, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import CartContextProvider from './context/cartContext';

import ItemListContainer from './components/Containers/ItemListContainer';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import Footer from "./components/Footer";

import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import CartForm from "./components/Cart/CartForm";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <main className="container justify-content-center">

            <Switch>
              <Route exact path='/'>
                <ItemListContainer />
              </Route>

              <Route path='/categoria/:idCategory' component={ItemListContainer} />
              
              <Route exact path='/detalle/:id'>
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
    </CartContextProvider>  
  );
}

export default App;
