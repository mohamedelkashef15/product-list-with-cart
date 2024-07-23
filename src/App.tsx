import Cart from "./components/Cart";
import Desserts from "./components/Desserts";
function App() {
  return (
    <main id="main">
      <div className="container">
        <div className="row">
          <Desserts />
          <Cart />
        </div>
      </div>
    </main>
  );
}

export default App;
