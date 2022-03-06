import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiStar } from "react-icons/hi";
import { Button } from "reactstrap";
import ReactModal from "react-modal";

import "../styles/ProductCard.css";
import Veg from "../assets/veg.png";
import NonVeg from "../assets/nonveg.png";
import Popup from "./Popup";

//redux section
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart";

ReactModal.setAppElement("#root");

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = () => {
    dispatch(addToCart());
    toggleModal();
  };

  const isRadio = product.toppings[0].isRadio;

  return (
    <div className="product-card">
      <div className="card-top">
        <img className="card-image" src={product.img_url} alt="product"></img>
        <img
          className="veg-image"
          src={product.isVeg ? Veg : NonVeg}
          alt="vegCheck"
        ></img>

        <div className="card-info">
          {product.name}
          <p style={{ color: "grey", fontSize: "14px" }}>
            {product.description}
          </p>
        </div>
      </div>
      <div className="card-bottom">
        <div>
          <HiStar color="#EFE71B" /> {product.rating}
        </div>
        <div className="card-popup-button" onClick={toggleModal}>
          <BsPlusLg />
        </div>
        <div>
          <span style={{ color: "#4E60FF" }}>₹ </span>
          {product.price}
        </div>

        {/* {  Modal Section Start } */}
        <ReactModal
          isOpen={showModal}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            },
            content: {
              position: "absolute",
              top: "20%",
              left: "20vw",
              right: "20vw",
              bottom: "150px",
              border: "1px solid #4e60ff",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "10px",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <Popup product={product} isRadio={isRadio} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button color="danger" onClick={toggleModal}>
              Close
            </Button>
            <Button color="success" onClick={() => handleSubmit()}>
              Add to Cart
            </Button>
          </div>
        </ReactModal>
        {/* {    Modal Section End  } */}
      </div>
    </div>
  );
};

export default ProductCard;
