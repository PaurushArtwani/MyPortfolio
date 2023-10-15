import { Col, Container, Row } from "react-bootstrap";
import HeaderSection from "../HeaderSection/HeaderSection";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <HeaderSection header={"Contact Me"}></HeaderSection>

      <Row>
        <Col>
          <Logo className="icons-section">
            <a className="socials">
              <img src="gmail.png" />
            </a>
            <a className="socials">
              <img src="phone.png" />
            </a>
            <a className="socials">
              <img src="linkdin.png" />
            </a>
            <a className="socials">
              <img src="instagram.png" />
            </a>
            <a className="socials">
              <img src="facebook.png" />
            </a>

            <a className="socials">
              <img src="twitter.png" />
            </a>
          </Logo>
        </Col>
      </Row>
      <Row className="mt-5 mb-3">
        <Col>
          <FooterLabel>
            <p>Copyright © Paurush Artwani</p>
          </FooterLabel>
        </Col>
      </Row>
    </Container>
  );
};

const Logo = styled.div`
  text-align: center;
  .socials {
    position: relative;
    display: inline-block;
    width: 90px;
    height: 90px;
    text-align: center;
    padding: 15px;
    transition: all 0.6s ease 0s;
    margin-right: 30px;
    margin-left: 30px;
  }
  img {
    height: 100%;
    width: 100%;
  }
  .socials:hover {
    transform: translate(0, -10px);
  }
`;
const FooterLabel = styled.div`
  text-align: center;
  p {
    color: #db9a64;
    font-size: 18px;
  }
`;
export default Footer;
