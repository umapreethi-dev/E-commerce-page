import "../App.css";
import { BsStarFill } from "react-icons/bs";
import { useState } from "react";

function Productcard(props) {
  const product = {
    id: props.id,
    img: props.img,
    name: props.name,
    price: props.price,
    discountPrice: props.discountPrice,
  };
  function handleClick() {
    props.setCart([...props.cart, product]);
  }
  let buttonClass;
  const isFound = props.cart.some((item) => {
    //console.log('cart-' + item.id,' product-' + product.id);
    if (item.id === product.id) {
      buttonClass = "disabled";
    }
    // else {
    //   buttonClass = " ";
    // }
  });
 //console.log(isFound)
  const cp = props.discountPrice ? props.discountPrice : props.price;

  return (
    <div className="col-lg-3 col-md-2" key={props.id}>
      <div className="card">
        {props.discountPrice && <div className="card-badge">Sale</div>}
        <img
          src={props.img}
          className="card-img-top productImg"
          alt={props.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            {props.discountPrice && (
              <span
                className="discount"
                style={{
                  textDecoration: props.discountPrice ? "line-through" : "none",
                }}
              >
                {props.price}
              </span>
            )}

            {cp}
          </p>

          <div className="rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <BsStarFill />
          </div>
          <button
            type="button"
            class={`btn btn-outline-dark ${buttonClass}`}
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productcard;
