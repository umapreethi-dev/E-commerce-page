import "../App.css"
import {BsStarFill} from "react-icons/bs"
import { useState} from "react"

function Productcard(props){
    const [cart,setCart] = useState(0);

    function handleClick(){
        setCart(prevValue=> prevValue + +1)
    }
    console.log(cart);

    const cp = props.discountPrice? props.discountPrice: props.price;
    
    return(
        <div className="col-lg-3 col-md-2">
        <div className="card" >
            {props.discountPrice && <div className="card-badge">Sale</div>}
            <img src={props.img} className="card-img-top productImg" alt={props.name}  />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"> 
                    {props.discountPrice &&<span className="discount" style={{textDecoration: props.discountPrice? "line-through": "none" }}>{props.price}</span>}
                    
                    {cp}
                </p>
               
                <div className="rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <BsStarFill/>
                </div>
                <button type="button" class="btn btn-outline-dark" onClick={handleClick}>Add to Cart</button>
            </div>
        </div>
        </div>
        
    )
}

export default Productcard;