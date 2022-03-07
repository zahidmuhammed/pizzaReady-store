import React, { useState } from "react";
import { v4 } from "uuid";
import "../styles/Popup.css";
import { useDispatch } from "react-redux";
import { setSingleItem } from "../redux/cart";
import { CheckBoxToppings, RadioButtonToppings } from "./ToppingSelection";

const Popup = ({ product, isRadio }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("Regular");

  const selectedProduct = {
    pid: v4(),
    psize: size,
    pquantity: count,
    pname: product.name,
    pprice: product.price,
  };

  dispatch(setSingleItem(selectedProduct));

  return (
    <div className="popup-wrapper">
      <div className="popup-heading">{product.name}</div>
      <span>Select 👇 Size </span>
      <div className="pizza-size-wrapper">
        <input
          type="radio"
          name="size"
          id="regular"
          value="Ragular"
          onChange={(e) => setSize(e.target.value)}
        ></input>
        <label htmlFor="regular">Regular</label>
        <input
          type="radio"
          name="size"
          id="medium"
          value="Medium"
          onChange={(e) => setSize(e.target.value)}
        ></input>
        <label htmlFor="medium">Medium</label>
        <input
          type="radio"
          name="size"
          id="large"
          value="Large"
          onChange={(e) => setSize(e.target.value)}
        ></input>
        <label htmlFor="large">Large</label>
      </div>
      Select Toppings 👇{" "}
      {isRadio ? <RadioButtonToppings /> : <CheckBoxToppings />}
      <div style={{ margin: "10px" }}>
        Quantity
        <div>
          <button
            className="qty-btn"
            onClick={() => setCount(count !== 1 ? count - 1 : count)}
          >
            -
          </button>
          {count}
          <button className="qty-btn" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
