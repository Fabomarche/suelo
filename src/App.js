import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import Intro from './components/Intro'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Intro />
      </header>
    </div>
  );
}

export default App;
