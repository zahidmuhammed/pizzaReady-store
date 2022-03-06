import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, changeQty } from "../redux/cart";

import { FaTrash } from "react-icons/fa";

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

  return (
    <div
      className="cartcard-wrapper"
      style={{
        backgroundColor: "white",
        margin: "10px 5px",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <div
        className="card-top"
        style={{
          display: "flex",
          fontWeight: "bold",
          fontSize: "15px",
        }}
      >
        {item.pname}
      </div>
      <div style={{ fontSize: "15px", color: "#393939" }}>
        Toppings:{item.ptoppings === "" ? " Nothing" : ` ${item.ptoppings}`}
      </div>
      <div style={{ fontSize: "12px" }}>
        <span
          style={{
            backgroundColor: "#C4C4C4",
            padding: "2px",
            borderRadius: "3px",
          }}
        >
          {item.psize}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: "15px",
          color: "#393939",
          justifyContent: "space-between",
        }}
      >
        <span>Quantity :</span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              border: "none",
              borderRadius: "50%",
              height: "17px",
              width: "17px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 10px",
            }}
            onClick={() => dispatch(changeQty(minusCount))}
          >
            -
          </button>
          {item.pquantity}{" "}
          <button
            style={{
              border: "none",
              borderRadius: "50%",
              height: "17px",
              width: "17px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 10px",
            }}
            onClick={() => dispatch(changeQty(plusCount))}
          >
            +
          </button>
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
