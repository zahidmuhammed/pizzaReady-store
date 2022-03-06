import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToppings } from "../redux/cart";

export const RadioTopping = () => {
  const [buckets, setBuckets] = useState({
    red_pepper: false,
    onion: false,
    grilled_mushroom: false,
    extra_cheese: false,
    black_olive: false,
  });

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setBuckets({ ...buckets, [id]: checked });
  };

  //   console.log(buckets);
  const dispatch = useDispatch();
  dispatch(setToppings(buckets));

  return (
    <div className="topping-wrapper">
      <input
        type="checkbox"
        id="red_pepper"
        name="red_pepper"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="red_pepper">Red pepper</label>
      <input type="checkbox" id="onion" onChange={(e) => handleChange(e)} />
      <label htmlFor="onion">Onion</label>
      <input
        type="checkbox"
        id="grilled_mushroom"
        name="grilled_mushroom"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="grilled_mushroom">Grilled Mushroom</label>
      <input
        type="checkbox"
        id="extra_cheese"
        name="extra_cheese"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="extra_cheese">Extra Cheese</label>
      <input
        type="checkbox"
        id="black_olive"
        name="black_olive"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="black_olive">Black Olive</label>
    </div>
  );
};
