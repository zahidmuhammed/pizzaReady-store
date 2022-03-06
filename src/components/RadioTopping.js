import React, { useState } from "react";

const RadioTopping = () => {
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

  console.log(buckets);

  return (
    <div>
      <input
        type="checkbox"
        id="red_pepper"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="red_pepper">Red pepper</label>
      <input type="checkbox" id="onion" onChange={(e) => handleChange(e)} />
      <label htmlFor="onion">Onion</label>
      <input
        type="checkbox"
        id="grilled_mushroom"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="grilled_mushroom">Grilled Mushroom</label>
    </div>
  );
};

export default RadioTopping;
