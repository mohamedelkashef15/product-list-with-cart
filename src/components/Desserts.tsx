import "./desserts.scss";

function Desserts() {
  return (
    <div className="dessert">
      <h1>Desserts</h1>
      <div className="dessert-items">
        <DessertItem />
      </div>
    </div>
  );
}

function DessertItem() {
  return (
    <div className="dessert-item">
      <img src="../images/image-waffle-desktop.jpg" className="product-img" alt="waffle" />
      <div className="product-details">
        <button className="btn-cart">
          <img src="images/icon-add-to-cart.svg" alt="cart" />
          <span>Add to Cart</span>
        </button>
        <span className="category">Waffle</span>
        <h2 className="product-title">Waffle with Berries</h2>
        <p className="product-price">$6.50</p>
      </div>
    </div>
  );
}

export default Desserts;
