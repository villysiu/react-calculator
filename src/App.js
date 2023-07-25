import Keyboard from "./components/Keyboard";
import { Footer } from "./components/Footer";
import { ShortCut } from "./components/ShortCut";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App bg">
        <Container className='p-0'>
          <Row className='m-0'>
            <Col sm={12} md={7} className='p-0' ><Keyboard /></Col>
            <Col md={5} className='p-0'><ShortCut /></Col>
          </Row>
        </Container>
        <Footer />
  
    </div>
  );
}

export default App;
