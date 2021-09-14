import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Containers/ItemListContainer';
import ItemCount from './components/ItemCount'
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
/* import Intro from './components/Intro'
import Carousel_intro from './components/Carousel_intro'; */

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <ItemListContainer mensaje={<ItemCount stock={6} initial={1} />}/>
      <main className="container justify-content-center">
      
      <ItemDetailContainer/>

      {/*  <Intro />
        <Carousel_intro /> */}
      </main>    
    </div>
  );
}

export default App;
