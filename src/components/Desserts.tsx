import "./desserts.scss";

interface IDessertItem {
  id?: number;
  img: string;
  title: string;
  category: string;
  price: string;
}

const productData = [
  {
    id: 1,
    img: `images/image-waffle-desktop.jpg`,
    title: "Waffle with Berries",
    category: "Waffle",
    price: "6.50",
  },

  {
    id: 2,
    img: "images/image-creme-brulee-desktop.jpg",
    title: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: "7.00",
  },
  {
    id: 3,
    img: "images/image-macaron-desktop.jpg",
    title: "Macaron Mix of Five",
    category: "Macaron",
    price: "8.00",
  },
  {
    id: 4,
    img: "images/image-tiramisu-desktop.jpg",
    title: "Classic Tiramisu",
    category: "Tiramisu",
    price: "5.50",
  },
  {
    id: 5,
    img: "images/image-baklava-desktop.jpg",
    title: "Pistachio Baklava",
    category: "Baklava",
    price: "4.00",
  },
  {
    id: 6,
    img: "images/image-meringue-desktop.jpg",
    title: "Lemon Meringue Pie",
    category: "Pie",
    price: "5.00",
  },
  {
    id: 7,
    title: "Red Velvet Cake",
    img: "images/image-cake-desktop.jpg",
    category: "Cake",
    price: "4.50",
  },
  {
    id: 8,
    title: "Salted Caramel Brownie",
    img: "images/image-brownie-desktop.jpg",
    category: "Brownie",
    price: "4.50",
  },
  {
    id: 9,
    img: "images/image-panna-cotta-desktop.jpg",
    title: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: "6.50",
  },
];

function Desserts() {
  return (
    <div id="dessert">
      <h1>Desserts</h1>
      <div className="dessert-items">
        {productData.map((product) => {
          return (
            <DessertItem
              img={product.img}
              title={product.title}
              category={product.category}
              price={product.price}
              key={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}

function DessertItem({ img, title, category, price }: IDessertItem) {
  return (
    <div className="dessert-item">
      <img src={img} className="product-img" alt={title} />
      <div className="product-details">
        <button className="btn-cart">
          <img src="images/icon-add-to-cart.svg" alt="cart" />
          <span>Add to Cart</span>
        </button>
        <span className="category">{category}</span>
        <h2 className="product-title">{title}</h2>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
}

export default Desserts;
