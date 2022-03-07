import React, { useEffect } from "react";
import Axios from "axios";
import { Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { setDatas } from "../redux/product";
import "../styles/HomeScreen.css";

const HomeScreen = () => {
  const dispatch = useDispatch();

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

  const storeData = useSelector((state) => state.products.filteredProducts);

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
