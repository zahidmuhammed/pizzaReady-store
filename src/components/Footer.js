import { Navbar, Collapse, NavbarText } from "reactstrap";

const Footer = () => {
  return (
    <div className="sticky-bottom">
      <Navbar color="light" expand="md" light>
        <Collapse navbar className="d-flex justify-content-center">
          <NavbarText>© 2022 PizzaCompany, Inc</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Footer;
