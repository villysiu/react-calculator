import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
const TechSpec = () => {
    return(
        <Container fluid className='bg'>
            <Row>
                <Col className='card-col'>
                
                    <Card>
                        <a href="/">Back to Calculator</a>
                        
                        <h1>About </h1>
                        <p>
                            This web application is an online calculator. 
                            Users can perform basic arithmetic calculations, 
                            such as addition, deduction, multiplication and division, 
                            with the calculator.
                        </p>

                        <h1>Tech Spec </h1>
                        <li>Designed front-end framework with <strong>React.js, HTML5 and CSS3</strong>. </li>
                        <li>Built Responsive user interface using <strong>React Bootstrap</strong> grid (Container, Row, Col), 
                            and <strong>CSS3</strong> media queries and flexbox to accomodate screen size of different devices.</li>
                        <li>Used <strong>JavaScript and ES6</strong> properties for the arithmetic algorithms.</li>
                        <li>Developed reusable code to use across different parts of an application.</li>
                        <li>Applied optimization to reduce load time and avoid re-rendering.</li>

                        <li>Used <strong>React Hooks</strong> (useState, useEffect) to use state and lifecycle methods inside functional components.</li>
                        <li>Used React useReducer hook to render the updated state after user input and during calculation.</li>
                        <li>Used setTimeout and useEffect hooks to imitate click on calculator pad when user pressed keys on keyboard.</li>
                        <li>Used Regular Expression (or Regex) to match patterns of a integer and decimal number.</li>
                        
                    </Card>
                </Col>
            </Row>
        </Container>
        
    )
}
export default TechSpec