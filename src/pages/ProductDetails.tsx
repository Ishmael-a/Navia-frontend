
import React from 'react'
import Dropdown from '../components/Dropdown'
import "../styles/ProductDetails.css"
import Gucci from "../assets/images/gucci.jpg"

const ProductDetails = () => {
  return (
    <>
    <div className="content">
        <div className="product-image">
          <img src={Gucci} alt="Shoe" />
        </div>

        <div className="product-details">
          <h2>Low 1 | White</h2>
          <p>⭐⭐⭐⭐⭐ 24063 Reviews</p>
          <h3>$275</h3>

          <div className="size-section">
            <p>SIZE</p>
            <div className="sizes">
              {[5, 6, 7, 8, 9, 10, 11, 12].map((size) => (
                <button key={size} className="size-button">
                  {size}
                </button>
              ))}
            </div>
            <p className="size-link">Calculate your size</p>
          </div>

          <button className="add-to-cart">Add to Cart</button>

          <div className="additional-info">
            <p>This style is available in whole sizes only...</p>
            <p>Made in Italy</p>
            <p>Free shipping worldwide...</p>
            <p>Questions? Email us at contact@olivercabell.com</p>
          </div>

          <Dropdown title="Description">
            <p>Details about the product...</p>
          </Dropdown>

          <Dropdown title="Materials">
            <p>Details about the materials...</p>
          </Dropdown>
        </div>
      </div>

      {/* Additional Images */}
      <div className="additional-images">
        <img src={Gucci} alt="Side View" />
        <img src={Gucci} alt="Top View" />
        <img src={Gucci} alt="Angle View" />
      </div>
    </>
  )
}

export default ProductDetails