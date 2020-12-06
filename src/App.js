import './App.css';
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">       
        <h1>The weather channel</h1>
      </header>
      <main>
        <Weather/>
      </main>
      <footer>
        © Kronans Apotek AB 2019
      </footer>
    </div>
  );
}

export default App;
