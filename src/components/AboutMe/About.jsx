import ButtonSection from "../Button/ButtonSection";
import HeaderSection from "../HeaderSection/HeaderSection";
import styled from "styled-components";
// Paurush
const About = () => {
  return (
    <>
      <Aboutsection>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <HeaderSection header={"About Me"}></HeaderSection>
            </div>
            <div className="col-lg-4">
              <img />
            </div>
            <div className="col-lg-8 mb-5 ">
              <p className="lead">
                My name is Paurush Artwani, I am a computer technician with a
                great passion for programming. I am passionate about delivering
                solutions that add to people's lives and at the same time
                challenge me. Improved my skills as a Front-End Developer. CSS,
                and JavaScript. <br />I am familiar with developing layouts that
                are provided to me. I'm always improving myself with each
                project put in my hands. I am a dedicated person who pursues his
                dreams, hardworking and results oriented, I always seek to
                achieve my best version.
              </p>
              <ButtonSection button={"Download Cv"}></ButtonSection>
            </div>
          </div>
        </div>
      </Aboutsection>
    </>
  );
};
const Aboutsection = styled.section`
  .lead {
    font-weight: 200;
    line-height: 1.5;
    color: white;
  }
`;
export default About;
