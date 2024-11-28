import React, { useState } from "react";
import {Outlet, Link} from "react-router-dom";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Apple AirPods Pro", color: "White", price: 249.99, count: 1 },
    { id: 2, name: "Apple AirPods Max", color: "Silver", price: 549.99, count: 1 },
    { id: 3, name: "Apple HomePod Mini", color: "Silver", price: 99.99, count: 1 },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [state, setState] = useState<"cart"|"checkout">("cart");

  const handleQuantityChange = (id:number, amount: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(item.count + amount, 1) }
          : item
      )
    );
  };

  const handleRemoveItem = (id:number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleApplyPromo = () => {
    // Example promo logic
    if (promoCode === "DISCOUNT10") setDiscount(0.1);
    else setDiscount(0);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  const total = (subtotal * (1 - discount)).toFixed(2);

  return (
    <div className="cart">

      <div className="progress-bar">
        <div className={`step ${ state ==="cart"? "active":"completed"}`} onClick={()=> setState("cart")}><Link to="/cart" >Cart</Link></div>
        <div className={`step ${ state ==="checkout"? "active":"completed"}`} onClick={()=> setState("checkout")}><Link to="checkout" >Checkout</Link></div>
      </div> 

      {state === "cart" && <>
        <div className="cart-comp">

            <div className="cart-clear ">
                <h2>Cart ({cartItems.length} products)</h2>
                <button className="clear-cart" onClick={handleClearCart}>
                    Clear cart
                </button>
            </div>




        <div className="cart-container">

            
            <div className="product">
                <div className="titles">
                    <h3 style={{fontWeight:"bold"}}>Product</h3>
                    <h3 style={{marginLeft:"60px",fontWeight:"bold"}}>Count</h3>
                    <h3 style={{marginRight: "85px", fontWeight:"bold"}}>Price</h3>

                </div>
                <div className="product-list">
                    {cartItems.map((item) => (
                        <CartItem
                        key={item.id}
                        item={item}
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemoveItem}
                        />
                    ))}
                    </div>
            </div>
            <div className="promo-section">
            <h3>Promo code</h3>
            <input
                type="text"
                placeholder="Type here..."
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                />
            <button onClick={handleApplyPromo}>Apply</button>
            <div className="price-summary" style={{width:"100%"}}>
                <p style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>Subtotal: <p>${subtotal.toFixed(2)}</p> </p>
                <p style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>Discount: <p>-${(subtotal * discount).toFixed(2)}</p></p>
                <h4 style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>Total: <p>${total}</p></h4>
            </div>
            <button className="checkout-button">Continue to checkout</button>
            </div>
        </div>

        </div>
        </>}

        {state === "checkout" && <Outlet/>}

    </div>
  );
};

export default Cart;
