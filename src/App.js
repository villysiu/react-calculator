import Keyboard from "./components/Keyboard";
import { Footer } from "./components/Footer";
import { ShortCut } from "./components/ShortCut";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App bg">
        <Container>
          <Row>
            <Col sm={12} md={8}><Keyboard /></Col>
            <Col sm={0} md={4}><ShortCut /></Col>
          </Row>
        </Container>
        <Footer />
  
    </div>
  );
}

export default App;
