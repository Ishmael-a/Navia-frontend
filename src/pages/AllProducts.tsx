

import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/AllProducts.css'
import ProductImage from "../assets/images/product-image.jpg";
import DSM from "../assets/images/dsm.jpg";

export const AllProducts = () => {
  return (
<>
{/* <!-- Header Section --> */}
  <header className="header">
    <div className="hero" style={{ 
      position: "relative", // Necessary for positioning the pseudo-element
      overflow: "hidden", // Ensures the blur doesn’t spill outside the div
      width: "100%",
      height: "200px",  
      borderRadius: "15px" }}>

      <div
        style={{
          backgroundImage: `url(${DSM})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(5px)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          //zIndex: -1, // Ensures the background stays behind the content
        }}
      />
      {/* Content */}
      <div style={{ position: "relative", color: "white", fontSize: "40px", fontWeight: "bold", justifyContent: "center", alignItems: "center" }}>
        Simple is More
      </div>
    </div>
  </header>

  {/* <!-- Main Content --> */}
  <main>
    {/* <!-- Breadcrumb and Results --> */}
    <section className="breadcrumb-results">
      <p>Home Clothes</p>
      <h2>64 results for clothes</h2>
    </section>

    {/* <!-- Filter and Product Grid --> */}
    <section className="content">
      {/* <!-- Filter Sidebar --> */}
      <aside className="filter">
        <h3>Filter</h3>
        
        {/* <!-- Brand Filter --> */}
        <div className="filter-section">
          <h4>Brand</h4>
          <input type="text" placeholder="Search brand" className="search-input"/>
          <ul className="brand-list">
            <li style={{ fontSize: "18px"}}><input type="checkbox"/> Nike <span style={{ fontSize: "18px"}}>123</span></li>
            <li style={{ fontSize: "18px"}}><input type="checkbox"/> Adidas <span style={{ fontSize: "18px"}}>55</span></li>
            <li style={{ fontSize: "18px"}}><input type="checkbox"/> Apple <span style={{ fontSize: "18px"}}>65</span></li>
            <li style={{ fontSize: "18px"}}><input type="checkbox"/> New Balance <span style={{ fontSize: "18px"}}>129</span></li>
            <li style={{ fontSize: "18px"}}><input type="checkbox"/> Uniqlo <span style={{ fontSize: "18px"}}>41</span></li>
          </ul>
        </div>

        {/* <!-- Price Filter --> */}
        <div className="filter-section">
          <h4>Price</h4>
          <div className="price-range">
            <input type="range" min="2800" max="300000" step="100" className="price-slider"/>
            <div className="price-input">
              <input type="number" placeholder="2900"/> -
              <input type="number" placeholder="300,000"/>
            </div>
          </div>
        </div>

        {/* <!-- Size Filter --> */}
        <div className="filter-section">
          <h4>Size</h4>
          <div className="sizes">
            <span>XXS</span> <span>XS</span> <span>S</span> <span>M</span>
            <span>L</span> <span>XL</span>
          </div>
        </div>
        
        {/* <!-- Color Filter --> */}
        <div className="filter-section">
          <h4>Color</h4>
          <div className="colors">
            <span className="color red"></span>
            <span className="color blue"></span>
            <span className="color green"></span>
            <span className="color yellow"></span>
          </div>
        </div>
      </aside>

      {/* <!-- Product Grid --> */}
      <div className="products">
        <div className="toolbar">
          <button className="grid-view active">Grid</button>
          <button className="list-view">List</button>
          <select>
            <option>Sort by Popular</option>
            <option>Sort by Price</option>
          </select>
        </div>
        <div className="product-grid">
          <div className="product-card">
            {/* <span className="badge">New Arrival</span> */}
            <img style={{ }} src={ProductImage} alt="Shirt Soft Cotton"/>
            <div className="" style={{ display: "flex", flexDirection: "column", textAlign:"left"}}>
              <p style={{ fontSize: "14px", fontWeight: "600", color: "gray" }}>Uniqlo</p>
              <h4 style={{  fontSize: "17px", fontWeight: "600" }}>Shirt Soft Cotton</h4>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
              <p style={{  fontSize: "14px", fontWeight: "700" }}>USD 40.00</p>
              <button  className='addToCart'>Add To Cart</button>
            </div>
          </div>

          <div className="product-card">
            {/* <span className="badge">New Arrival</span> */}
            <img style={{ }} src={ProductImage} alt="Shirt Soft Cotton"/>
            <div className="" style={{ display: "flex", flexDirection: "column", textAlign:"left"}}>
              <p style={{ fontSize: "14px", fontWeight: "600", color: "gray" }}>Uniqlo</p>
              <h4 style={{  fontSize: "17px", fontWeight: "600" }}>Shirt Soft Cotton</h4>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
              <p style={{  fontSize: "14px", fontWeight: "700" }}>USD 40.00</p>
              <button  className='addToCart'>Add To Cart</button>
            </div>
          </div>

          <div className="product-card">
            {/* <span className="badge">New Arrival</span> */}
            <img style={{ }} src={ProductImage} alt="Shirt Soft Cotton"/>
            <div className="" style={{ display: "flex", flexDirection: "column", textAlign:"left"}}>
              <p style={{ fontSize: "14px", fontWeight: "600", color: "gray" }}>Uniqlo</p>
              <h4 style={{  fontSize: "17px", fontWeight: "600" }}>Shirt Soft Cotton</h4>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
              <p style={{  fontSize: "14px", fontWeight: "700" }}>USD 40.00</p>
              <button className='addToCart'>Add To Cart</button>
            </div>
          </div>
          {/* <!-- Repeat Product Cards --> */}
        </div>
      </div>
    </section>
  </main>
  </>
  )
}
