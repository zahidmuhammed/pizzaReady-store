import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Provider } from "react-redux";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./redux/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import { FilterOrder } from "./components/FilterOrder";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Container>
        <FilterOrder />
        <Row>
          <Col className="col-12 col-sm-9">
            <HomeScreen />
          </Col>
          <Col className="col-12 col-sm-3 cart-wrapper">
            <CartScreen />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Provider>
  );
};

export default App;
