import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./App.css";
// react toastify & reactstrap stuffs
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import FilterOrder from "./components/FilterOrder";

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
      <ToastContainer position="bottom-center" theme="dark" autoClose={3000} />
    </Provider>
  );
};

export default App;
