import data from "./ProductData";
import Productcard from "./Productcard";

export default function Home({ cart, setCart }) {
  const productData = data.map((item, index) => {
    return (
      <Productcard
        id={index}
        img={item.img}
        name={item.name}
        price={item.price}
        pricecut={item.pricecut}
        discountPrice={item.discountPrice}
        cart={cart}
        setCart={setCart}
      />
    );
  });
  return (
    <div>
      <div className="banner">
        <div className="container">
          <h1 className="banner-title">Shop in style</h1>
          <p className="banner-text">With this shop homepage template</p>
        </div>
      </div>
      <div className="products">
        <div className="container">
          <div className="row">{productData}</div>
        </div>
      </div>
    </div>
  );
}
