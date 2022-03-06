import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavbarText,
} from "reactstrap";

const Header = () => {
  return (
    <Container>
      <div className="sticky-top">
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Pizza Store</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar className="d-flex justify-content-center">
            <NavbarText>Order Now !!!</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
