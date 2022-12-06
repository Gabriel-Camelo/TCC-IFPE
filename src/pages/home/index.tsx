import Components from "../../components";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const Home = () => {
  return (
    <>
      <Components.Navbar bg="dark" expand="lg" variante="dark"/>
      <Components.Search />
      <Container className="main">
        <Components.Postcard type="banner"/>
        <Row>
          <Components.PostGrid />
        </Row>
      </Container>

    </>
  );
};

export default Home;