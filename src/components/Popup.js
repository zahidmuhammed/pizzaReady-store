import React, { useState } from "react";
import { v4 } from "uuid";
import "../styles/Popup.css";
import { useDispatch } from "react-redux";
import { setSingleItem, setToppings } from "../redux/cart";
import { RadioTopping } from "./RadioTopping";

const ToppingsRadio = () => {
  // const toppings = useSelector((state) => state.products.toppings);
  const [topping, setTopping] = useState({
    // red_pepper: false,
    // onion: false,
    // grilled_mushroom: false,
    // extra_cheese: false,
    // black_olive: false,
  });

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setTopping({ [id]: checked });
  };

  // console.log(topping);
  const dispatch = useDispatch();
  dispatch(setToppings(topping));

  return (
    <div className="topping-wrapper">
      <input
        type="radio"
        name="toppings"
        id="red_pepper"
        // value="red_pepper"
        onChange={(e) => handleChange(e)}
      ></input>
      <label htmlFor="red_pepper">Red Pepper</label>
      <input
        type="radio"
        name="toppings"
        id="onion"
        // value="onion"
        onChange={(e) => handleChange(e)}
      ></input>
      <label htmlFor="onion">Onion</label>
      <input
        type="radio"
        name="toppings"
        id="grilled_mushroom"
        // value="grilled_mushroom"
        onChange={(e) => handleChange(e)}
      ></input>
      <label htmlFor="grilled_mushroom">Grilled Mushroom</label>
      <input
        type="radio"
        name="toppings"
        id="extra_cheese"
        // value="extra_cheese"
        onChange={(e) => handleChange(e)}
      ></input>
      <label htmlFor="extra_cheese">Extra Cheese</label>
      <input
        type="radio"
        name="toppings"
        id="black_olive"
        // value="black_olive"
        onChange={(e) => handleChange(e)}
      ></input>
      <label htmlFor="black_olive">Black Olive</label>
    </div>
  );
};

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
      <span>👇 Choose Size 👇</span>
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
      👇 Choose Toppings 👇
      {isRadio ? <ToppingsRadio /> : <RadioTopping />}
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
