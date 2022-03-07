import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToppings } from "../redux/cart";

export const RadioButtonToppings = () => {
  const [rTopping, setRTopping] = useState({});

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setRTopping({ [id]: checked });
  };

  const dispatch = useDispatch();
  dispatch(setToppings(rTopping));

  return (
    <>
      (Single Selection)
      <div className="topping-wrapper">
        <input
          type="radio"
          name="toppings"
          id="Red_pepper"
          onChange={(e) => handleChange(e)}
        ></input>
        <label htmlFor="Red_pepper">Red Pepper</label>
        <input
          type="radio"
          name="toppings"
          id="Onion"
          onChange={(e) => handleChange(e)}
        ></input>
        <label htmlFor="Onion">Onion</label>
        <input
          type="radio"
          name="toppings"
          id="Grilled_mushroom"
          onChange={(e) => handleChange(e)}
        ></input>
        <label htmlFor="Grilled_mushroom">Grilled Mushroom</label>
        <input
          type="radio"
          name="toppings"
          id="Extra_cheese"
          onChange={(e) => handleChange(e)}
        ></input>
        <label htmlFor="Extra_cheese">Extra Cheese</label>
        <input
          type="radio"
          name="toppings"
          id="Black_olive"
          onChange={(e) => handleChange(e)}
        ></input>
        <label htmlFor="Black_olive">Black Olive</label>
      </div>
    </>
  );
};

export const CheckBoxToppings = () => {
  const [cToppings, setCToppings] = useState({});

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setCToppings({ ...cToppings, [id]: checked });
  };

  const dispatch = useDispatch();
  dispatch(setToppings(cToppings));

  return (
    <>
      (Multi Selection)
      <div className="topping-wrapper">
        <input
          type="checkbox"
          id="Red_pepper"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="Red_pepper">Red pepper</label>
        <input type="checkbox" id="Onion" onChange={(e) => handleChange(e)} />
        <label htmlFor="Onion">Onion</label>
        <input
          type="checkbox"
          id="Grilled_mushroom"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="Grilled_mushroom">Grilled Mushroom</label>
        <input
          type="checkbox"
          id="Extra_cheese"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="Extra_cheese">Extra Cheese</label>
        <input
          type="checkbox"
          id="Black_olive"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="Black_olive">Black Olive</label>
      </div>
    </>
  );
};
