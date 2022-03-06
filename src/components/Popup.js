import React, { useState } from "react";
import { v4 } from "uuid";
import "../styles/Popup.css";
import { useSelector, useDispatch } from "react-redux";
import { setSingleItem, setToppings } from "../redux/cart";

const ToppingsRadio = () => {
  const toppings = useSelector((state) => state.products.toppings);
  const [topping, setTopping] = useState("");

  const dispatch = useDispatch();
  dispatch(setToppings(topping));

  return (
    <div className="topping-wrapper">
      <input
        type="radio"
        name="toppings"
        id={toppings[0]}
        value={toppings[0]}
        onChange={(e) => setTopping(e.target.value)}
      ></input>
      <label htmlFor={toppings[0]}>{toppings[0]}</label>
      <input
        type="radio"
        name="toppings"
        id={toppings[1]}
        value={toppings[1]}
        onChange={(e) => setTopping(e.target.value)}
      ></input>
      <label htmlFor={toppings[1]}>{toppings[1]}</label>
      <input
        type="radio"
        name="toppings"
        id={toppings[2]}
        value={toppings[2]}
        onChange={(e) => setTopping(e.target.value)}
      ></input>
      <label htmlFor={toppings[2]}>{toppings[2]}</label>
      <input
        type="radio"
        name="toppings"
        id={toppings[3]}
        value={toppings[3]}
        onChange={(e) => setTopping(e.target.value)}
      ></input>
      <label htmlFor={toppings[3]}>{toppings[3]}</label>
      <input
        type="radio"
        name="toppings"
        id={toppings[4]}
        value={toppings[4]}
        onChange={(e) => setTopping(e.target.value)}
      ></input>
      <label htmlFor={toppings[4]}>{toppings[4]}</label>
    </div>
  );
};

// const ToppingsCheck = () => {
//   const toppings = useSelector((state) => state.products.toppings);
//   const [selectedToppings, setSelectedToppings] = useState({
//     toppings: {
//       red_pepper: false,
//       onion: false,
//       grilled_mushroom: false,
//       extra_cheese: false,
//       black_olive: false,
//     },
//   });
//   console.log(selectedToppings);
//   const handleChange = (e) => {
//     const { name, checked } = e.target;
//     setSelectedToppings({ [name]: checked });
//   };

//   return (
//     <div>
//       <input
//         type="checkbox"
//         id="red_pepper"
//         name="red_pepper"
//         onChange={(e) => handleChange(e)}
//       ></input>
//       <label htmlFor="red_pepper">{toppings[0]}</label>
//       <input
//         type="checkbox"
//         id="onion"
//         name="onion"
//         onChange={(e) => handleChange(e)}
//       ></input>
//       <label htmlFor="onion">{toppings[1]}</label>
//       <input
//         type="checkbox"
//         id="grilled_mushroom"
//         name="grilled_mushroom"
//         onChange={(e) => handleChange(e)}
//       ></input>
//       <label htmlFor="grilled_mushroom">{toppings[2]}</label>
//       <input
//         type="checkbox"
//         id="extra_cheese"
//         name="extra_cheese"
//         onChange={(e) => handleChange(e)}
//       ></input>
//       <label htmlFor="extra_cheese">{toppings[3]}</label>
//       <input
//         type="checkbox"
//         id="black_oliv"
//         name="black_oliv"
//         onChange={(e) => handleChange(e)}
//       ></input>
//       <label htmlFor="black_oliv">{toppings[4]}</label>
//     </div>
//   );
// };

const Popup = ({ product, isRadio }) => {
  const [size, setSize] = useState("Regular");
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const selectedProduct = {
    pid: v4(),
    pname: product.name,
    psize: size,
    pquantity: count,
  };

  dispatch(setSingleItem(selectedProduct));

  return (
    <div
      className="popup-wrapper"
      style={{
        display: "flex ",
        flexDirection: "column",
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      <div
        style={{
          color: "#0e153a",
          fontSize: "30px",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        {product.name}
      </div>
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
      {/* {isRadio ? <ToppingsRadio /> : <ToppingsCheck />} */}
      <ToppingsRadio />
      <div style={{ margin: "10px" }}>
        Quantity
        <div>
          <button
            onClick={() => setCount(count !== 1 ? count - 1 : count)}
            style={{
              border: "none",
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              margin: "0 10px",
            }}
          >
            -
          </button>
          {count}
          <button
            onClick={() => setCount(count + 1)}
            style={{
              border: "none",
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              margin: "0 10px",
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
