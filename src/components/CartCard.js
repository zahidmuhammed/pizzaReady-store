import React from "react";
import "../styles/CartCard.css";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart, changeQtyFromCart } from "../redux/cart";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const plusCount = {
    pid: item.pid,
    type: "plus",
  };
  const minusCount = {
    pid: item.pid,
    type: "minus",
  };

  //Converts Object to  key/value array then filter toppings having value true
  const ToppingsArray = Object.entries(item.ptoppings).filter(
    ([key, value]) => value
  );

  return (
    <div className="cartcard-wrapper">
      <div className="card-heading">{item.pname}</div>
      <div className="toppings-info">
        Toppings:
        <div>
          {ToppingsArray.map(([key], index) => (
            <span key={index} style={{ color: "#4e60ff" }}>
              {key.replaceAll("_", " ")}
              <br />
            </span>
          ))}
        </div>
      </div>

      <div className="qty-wrapper">
        <div>Quantity :</div>
        <div className="qty-btns">
          <button
            className="qty-change"
            onClick={() => dispatch(changeQtyFromCart(minusCount))}
          >
            -
          </button>
          {item.pquantity}
          <button
            className="qty-change"
            onClick={() => dispatch(changeQtyFromCart(plusCount))}
          >
            +
          </button>
        </div>
        <div>
          <span className="item-size">{item.psize}</span>
        </div>
      </div>
      <div className="price-delete-part">
        <div>
          <span style={{ color: "#4e60ff" }}>₹ </span>
          {item.pprice * item.pquantity}
        </div>
        <FaTrash
          color="red"
          onClick={() => dispatch(removeFromCart(item.pid))}
          style={{ cursor: "pointer" }}
        ></FaTrash>
      </div>
    </div>
  );
};

export default CartCard;
