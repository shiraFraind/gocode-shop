import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
function App() {
  return (
    <div className="App">
      <h1>
        <Header />
        <Products />
      </h1>
    </div>
  );
}

export default App;
