import { Col, Container, Row } from "react-bootstrap";
import HeaderSection from "../HeaderSection/HeaderSection";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <HeaderSection header={"Contact Me"}></HeaderSection>

      <Row>
        <Col>
          <Logo classnameName="icons-section">
            <a classname="socials" href="https://www.gmail.com">
              <img src="gmail.png" alt="" />
            </a>
            <a classnameName="socials" href="tel:7023933047">
              <img src="phone.png" alt="" />
            </a>
            <a classname="socials" href="https://www.gmail.com">
              <img src="linkdin.png" alt="" />
            </a>
            <a classname="socials" href="https://www.gmail.com">
              <img src="instagram.png" alt="" />
            </a>
            <a classname="socials" href="https://www.gmail.com">
              <img src="facebook.png" alt="" />
            </a>
            <a classname="socials" href="https://www.gmail.com">
              <img src="twitter.png" alt="" />
            </a>
          </Logo>
        </Col>
      </Row>
      <Row classnameName="mt-5 mb-3">
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
