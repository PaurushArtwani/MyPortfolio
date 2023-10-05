import { Container, Row, Col } from "react-bootstrap";
import HeaderSection from "../HeaderSection/HeaderSection";
import styled from "styled-components";

const Education = () => {
  return (
    <Container>
      <HeaderSection header={"Education"}></HeaderSection>
      <Row className="mb-5">
        <Col xs={4}>
          <EducationSection className="p-2">
            <div className="img-section text-center">
              <img src="Html.png" />
            </div>
            <h3>MCA</h3>
            <p>
              Vellore Institute of Technology, Chennai Campus
              <br />
              (2020-2022)
            </p>
          </EducationSection>
        </Col>
        <Col xs={4}>
          <EducationSection className="p-2">
            <div className="img-section text-center">
              <img src="Html.png" />
            </div>
            <h3>MCA</h3>
            <p>
              Vellore Institute of Technology, Chennai Campus
              <br />
              (2020-2022)
            </p>
          </EducationSection>
        </Col>
        <Col xs={4}>
          <EducationSection className="p-2">
            <div className="img-section text-center">
              <img src="Html.png" />
            </div>
            <h3>MCA</h3>
            <p>
              Vellore Institute of Technology, Chennai Campus
              <br />
              (2020-2022)
            </p>
          </EducationSection>
        </Col>
      </Row>
    </Container>
  );
};

const EducationSection = styled.div`
  border: 1px solid #e3a068;

  .technology-img img {
    width: 130px;
  }
  h3 {
    color: #db9a64;
    margin-top: 22px;
    margin-bottom: 11px;
    font-weight: 500;
    text-align: center;
  }
  p {
    font-size: 18px;
    color: #c9c9c9;
    line-height: 28px;
    margin-bottom: 0;
    text-align: center;
  }
  img {
    width: 130px;
  }
`;
export default Education;
