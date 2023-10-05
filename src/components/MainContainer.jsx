import Banner from "./BannerPage/Banner";
import About from "./AboutMe/About";
import Technology from "./Technology/Technology";
import styled from "styled-components";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";

const MainContainer = () => {
  return (
    <>
      <MainContainerSection>
        <Banner></Banner>

        <div className="about-section">
          <About></About>
        </div>
        <div className="technology-section">
          <Technology></Technology>
        </div>
        <div className="Education-section">
          <Education></Education>
        </div>
        <div className="experience-section">
          <Experience></Experience>
        </div>
      </MainContainerSection>
    </>
  );
};
const MainContainerSection = styled.section`
  .about-section,
  .Education-section {
    background-color: #311e25;
  }
  .technology-section,
  .experience-section {
    background: #3b2930;
  }
`;
export default MainContainer;
