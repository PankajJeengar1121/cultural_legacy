import { useContext } from "react";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";
import "./Cart.scss";


const Cart = ({setShowCart}) => {
    const {cartItems,cartSubTotal} = useContext(Context);
    return (
    <div className="cart-pannel">
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
               <span className="heading">Cart</span>
               <span className="close-btn"
                onClick={() => setShowCart(false)}>
                <MdClose />
                <span className="text">Close</span>
               </span>
            </div>

            {!cartItems?.length && <div className="empty-cart">
                <BsCartX />
                <span>No Products In The cart.</span>
                <button
                 className="return-cta" 
                 onClick={() => setShowCart(false)}>
                    
                    RETURN TO SHOP</button>
            </div>}


            {!!cartItems?.length && <>
            <CartItem />
            <div className="cart-footer">
                <div className="subtotal">
                    <span className="text">SubTotal:</span>
                    <span className="text total">&#8377;{cartSubTotal}</span>
                </div>

                <div className="button">
                    <button className="checkout-cta">CheckOut</button>
                </div>
            </div>

            </>}
        </div>
    </div>
    );
};

export default Cart;
