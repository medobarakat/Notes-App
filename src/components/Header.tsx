import * as React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            Notes With React , Bootstrap And Typescript
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
