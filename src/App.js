import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Carousel_intro from './components/Carousel_intro';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="container justify-content-center">
        <Intro />
        <Carousel_intro />
      </main>    
    </div>
  );
}

export default App;
