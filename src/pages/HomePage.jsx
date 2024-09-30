import {Container, Row, Col} from "react-bootstrap";
import HeroImage from '../assets/img/veghero.png';


const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100">
        <Container>
          <Row className="header-box">
          <Col>
            <h1>Your Health <br />
            <span>is in Ours!</span> <br /> Make your choice now.
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus qui in, praesentium quia itaque.</p>
            <button>View Products</button>
            <button>View Promos</button>
          </Col>
          <Col>
          <img src={HeroImage} alt="hero-img" />
          </Col>
          </Row>
        </Container>
      </header>
      <div className="vegetable w-100 min-vh-100"></div>
    </div>
  )
}

export default HomePage