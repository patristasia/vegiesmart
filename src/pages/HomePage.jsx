import {Container, Row, Col} from "react-bootstrap";
import HeroImage from '../assets/img/veghero.png';


const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center pt-lg-5">
        <Container>
          <Row className="header-box d-flex align-items-center">
          <Col lg="6">
            <h1 className="mb-4">Your Health <br />
            is in Ours! <br />
            <span>Make your choice now.</span>
            </h1>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus qui in, praesentium quia itaque.</p>
            <div className="button-container">
            <button className="btn_viewProducts">View Products</button>
            <button className="btn_viewPromos">View Promos</button>
            </div>
          </Col>
          <Col lg="6"className="pt-lg-0 pt-4">
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