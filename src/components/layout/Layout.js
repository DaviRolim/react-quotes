import { Fragment } from "react";
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";

const Layout = (props) => {
  return (
    <Fragment>
      <NavBar />
      <Container fluid style={{ marginTop: "5%" }}>
        {props.children}
      </Container>
    </Fragment>
  );
};
export default Layout;
