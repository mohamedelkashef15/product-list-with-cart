import "./cart.scss";

function Cart() {
  return (
    <div id="cart">
      <h2>Your Cart (0)</h2>
      <div className="cart-content">
        <img src="images/illustration-empty-cart.svg" alt="cake" />
        <p>Your added items will appear here</p>
      </div>
    </div>
  );
}

export default Cart;
