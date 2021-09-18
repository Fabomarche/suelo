import { BrowserRouter, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Containers/ItemListContainer';
/* import ItemCount from './components/ItemCount' */
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import Cart from './components/Cart/Cart'
/* import Intro from './components/Intro'
import Carousel_intro from './components/Carousel_intro'; */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>

        <Switch>
          <Route exact path='/'>
            <ItemListContainer /* mensaje={<ItemCount stock={6} initial={1} />} *//>
          </Route>

          <Route path='/categoria/:idCategory' component={ItemListContainer} />
          
          <Route exact path='/detalle/:id'>
            <main className="container justify-content-center">
              <ItemDetailContainer/>
              {/*  <Intro />
                <Carousel_intro /> */}
            </main>    
          </Route>
          <Route exact path='/cart' component={Cart}/>
      
          
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
