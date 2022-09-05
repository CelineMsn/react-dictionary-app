import logo from "./img/logo.png";
import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container-fluid app-background pt-2 pb-2">
        <header className="app-header">
          <img
            src={logo}
            className="app-logo img-fluid"
            alt="logo dictionary app celine"
          />
        </header>
        <main>
          <Dictionary />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
