import React from "react";
import "../styles/CartItem.css";

interface CartItemProps {
    item: {
      id: number; // or string, depending on your ID structure
      name: string;
      color: string;
      price: number;
      count: number;
    };
    onQuantityChange: (id: number, amount: number) => void; // Callback for quantity change
    onRemove: (id: number) => void; // Callback for item removal
  }

const CartItem = ({ item, onQuantityChange, onRemove }: CartItemProps) => {
  return (
    <div className="product-item">
      <div className="product-info">
        <img
          src={`/images/${item.name.toLowerCase().replaceAll(" ", "-")}.png`}
          alt={item.name}
        />
        <div>
          <h4>{item.name}</h4>
          <p>{item.color}</p>
        </div>
      </div>
      <div className="product-quantity">
        <button onClick={() => onQuantityChange(item.id, -1)}>-</button>
        <span>{item.count}</span>
        <button onClick={() => onQuantityChange(item.id, 1)}>+</button>
      </div>
      <p>${(item.price * item.count).toFixed(2)}</p>
      <button className="remove-item" onClick={() => onRemove(item.id)}>
        ✖
      </button>
    </div>
  );
};

export default CartItem;
