import React from "react";
import { useDispatch } from "react-redux";
import { filterProductByType } from "../redux/product";
import { Input } from "reactstrap";

export const FilterOrder = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <div>
        <Input type="select">
          <option>Prize</option>
          <option>Rating</option>
        </Input>
      </div>
      <div>
        <Input type="select">
          <option onClick={() => dispatch(filterProductByType("all"))}>
            All
          </option>
          <option onClick={() => dispatch(filterProductByType("veg"))}>
            Vegetarian
          </option>
          <option onClick={() => dispatch(filterProductByType("nonveg"))}>
            Non Vegetarian
          </option>
        </Input>
      </div>
    </div>
  );
};
