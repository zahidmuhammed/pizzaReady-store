import { Navbar, Collapse, NavbarText } from "reactstrap";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="sticky-bottom">
      <Navbar color="light" expand="md" light>
        <Collapse navbar className="d-flex justify-content-center">
          <NavbarText>© {year} PizzaCompany, Inc</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Footer;
