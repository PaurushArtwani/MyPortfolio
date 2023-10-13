import { Col, Container, Row } from "react-bootstrap";
import HeaderSection from "../HeaderSection/HeaderSection";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <HeaderSection header={"Contact Me"}></HeaderSection>

      <Row>
        <Col>
          <div className="icons-section">
            <div>
              <a href="#">
                <Logo src="gmail.png" style={{ height: "30px" }} />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
const Link = styled.a``;
const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
export default Footer;
