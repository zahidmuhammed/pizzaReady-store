import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Axios from "axios";

import "../styles/HomeScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { setDatas } from "../redux/product";

import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.products.filteredProducts);

  const fetchDetails = async () => {
    const { data } = await Axios.get(
      "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
    );
    dispatch(setDatas(data));
  };

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        {storeData.map((product) => (
          <Col className="product-wrapper" key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
