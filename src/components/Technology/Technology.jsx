import { Col, Container, Row } from "react-bootstrap";
import HeaderSection from "../HeaderSection/HeaderSection";
import styled from "styled-components";
const Technology = () => {
  return (
    <>
      <Container>
        <HeaderSection header={"Technology"}></HeaderSection>

        <Row className="mt-3 mb-5">
          <Col xs={4}>
            <TechnologySection className="technology-container p-2 ">
              <div className="technology-img text-center ">
                <img src="Html.png" />
              </div>
              <h3>Html</h3>
              <p className="mb-3">
                Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae
                tristique ante ibero
              </p>
            </TechnologySection>
          </Col>
          <Col xs={4}>
            <TechnologySection className="technology-container p-2 ">
              <div className="technology-img text-center ">
                <img src="Html.png" />
              </div>
              <h3>Html</h3>
              <p className="mb-3">
                Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae
                tristique ante ibero
              </p>
            </TechnologySection>
          </Col>
          <Col xs={4}>
            <TechnologySection className="technology-container p-2 ">
              <div className="technology-img text-center ">
                <img src="Html.png" />
              </div>
              <h3>Html</h3>
              <p className="mb-3">
                Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae
                tristique ante ibero
              </p>
            </TechnologySection>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const TechnologySection = styled.div`
  border: 1px solid #e3a068;

  .technology-img img {
    width: 130px;
  }
  h3 {
    color: #db9a64;
    margin-top: 22px;
    margin-bottom: 11px;
    font-weight: 500;
    text-align:center
  }
  p{
    font-size: 16px;
    color: #C9C9C9;
    line-height: 28px;
    margin-bottom: 0;
    text-align:center
}
  
`;
export default Technology;
