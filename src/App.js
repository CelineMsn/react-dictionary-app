import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <img src={logo} className="app-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>Coded by CM </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
