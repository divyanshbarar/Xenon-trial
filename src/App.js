import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
      </header>
    </div>
  );
}

export default App;
