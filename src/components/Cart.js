import Card from "./Card";

export default function Cart({ cart, setCart }) {
  console.log(cart);
  const cartCard = cart.map((item, index) => {
    return (
      <Card
        index={index}
        img={item.img}
        name={item.name}
        price={item.price}
        cart={cart}
        setCart={setCart}
      />
    );
  });
  return (
  <div className="container">
    <div className="title">
      <h1>Shopping Cart</h1>
    </div>
    {cartCard}
  </div>)
}
