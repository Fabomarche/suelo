import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components//NavBar/ItemListContainer';
/* import Intro from './components/Intro'
import Carousel_intro from './components/Carousel_intro'; */

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <ItemListContainer mensaje="Acá va a estar el catálogo"/>
     {/*  <main className="container justify-content-center">
        <Intro />
        <Carousel_intro />
      </main>     */}
    </div>
  );
}

export default App;
