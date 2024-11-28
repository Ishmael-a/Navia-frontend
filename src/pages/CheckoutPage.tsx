import React, { useState } from 'react';
import "../styles/Checkout.css";


interface InputFields{
    label: string, 
    placeholder: string, 
    required?: boolean, 
    type?: "text"|"email"|"tel",
}

const InputField = ({ label, placeholder, required, type = "text" }:InputFields) => {
    return (
      <div className="input-group">
        <label style={{ width:"100%", textAlign:"left"}}>
          <p style={{ fontSize: "15px", fontWeight: "600", marginBottom: "10px", padding: 0 }}>{label} {required && <span className="required">*</span>}</p> 
        </label>
        <input type={type} placeholder={placeholder} />
      </div>
    );
  };


const CheckoutPage = () => {
  const [shippingMethod, setShippingMethod] = useState('Delivery');

  return (
    <div className="checkout-page">

      {/* Progress Bar */}
      {/* <div className="progress-bar">
        <div className="step completed">Cart</div>
        <div className="step completed">Review</div>
        <div className="step active">Checkout</div>
      </div> */}

      {/* Content */}
      <div className="content">
        {/* Shipping Information */}
        <div className="shipping-info">
            <div className="checkout-info">
                <h2>Checkout</h2>
                <h3>Shipping Information</h3>
            </div>

          {/* Shipping Method */}
          <div className="shipping-method">
            <button
              className={shippingMethod === 'Delivery' ? 'active' : ''}
              style={{borderRadius:"10px", width:"45%", marginRight:"10px"}}
              onClick={() => setShippingMethod('Delivery')}
            >
              🚚 Delivery
            </button>
            <button
              className={shippingMethod === 'Pickup' ? 'active' : ''}
              style={{borderRadius:"10px", width:"45%"}}

              onClick={() => setShippingMethod('Pickup')}
            >
              📦 Pick up
            </button>
          </div>

          {/* Form */}
          <form className="checkout-form">
            <InputField
              label="Full Name"
              placeholder="Enter full name"
              required
            />
            <InputField
              label="Email Address"
              placeholder="Enter email address"
              required
              type="email"
            />
            <InputField
              label="Phone Number"
              placeholder="Enter phone number"
              required
              type="tel"
            />
            <InputField
              label="Country"
              placeholder="Choose country"
              required
            />

            <div className="address-group">
              <InputField label="City" placeholder="Enter city" />
              <InputField label="State" placeholder="Enter state" />
              <InputField label="ZIP Code" placeholder="Enter ZIP code" />
            </div>

            <div className="terms">
              <input type="checkbox" id="terms" style={{width: "auto"}}/>
              <label htmlFor="terms">
                <h3>I have read and agree to the Terms and Conditions.</h3>
              </label>
            </div>
          </form>
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          <h3 style={{marginBottom: "20px", fontWeight:"bold"}}>Review your cart</h3>
          <div className="cart-item">
            <img
              src="/path-to-sofa-image.jpg"
              alt="Sofa"
              className="cart-item-img"
            />
            <div className="cart-item-details">
              <p>DuoComfort Sofa Premium</p>
              <p>1 x</p>
              <p>$20.00</p>
            </div>
          </div>
          <div className="cart-item">
            <img
              src="/path-to-desk-image.jpg"
              alt="Desk"
              className="cart-item-img"
              />
            <div className="cart-item-details">
              <p>IronOne Desk</p>
              <p>1 x</p>
              <p>$25.00</p>
            </div>
          </div>

          {/* Discount Code */}
          <div className="discount-code">
            <input type="text" placeholder="Discount code" />
            <button>Apply</button>
          </div>

          {/* Price Summary */}
          <div className="price-summary" style={{width: "100%"}}>
            <p style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>Subtotal: <p>$45.oo</p> </p>
            <p style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>Shipping: <p>$45.00</p> </p>
            <p style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>Discount: <p>-$45.00</p></p>
            <h4 style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>Total: <p>$90.00</p></h4>
          </div>

          <button className="pay-now">Pay Now</button>
          <div className="secure-checkout">
            <p>🔒 Secure Checkout – SSL Encrypted</p>
            <p>
              Ensuring your financial and personal details are secure during
              every transaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
