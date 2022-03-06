import React from "react";
import { useDispatch } from "react-redux";
import { Input } from "reactstrap";
import {
  filterProductByType,
  sortProductByPrize,
  sortProductByRating,
} from "../redux/product";

export const FilterOrder = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <div>
        <Input type="select">
          <option onClick={() => dispatch(sortProductByPrize("ascending"))}>
            Price L-H
          </option>
          <option onClick={() => dispatch(sortProductByPrize("descending"))}>
            Price H-L
          </option>
        </Input>
      </div>{" "}
      <div>
        <Input type="select">
          <option onClick={() => dispatch(sortProductByRating("ascending"))}>
            Rating L-H
          </option>
          <option onClick={() => dispatch(sortProductByRating("descending"))}>
            Rating H-L
          </option>
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
