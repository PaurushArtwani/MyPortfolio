import styled from "styled-components";
import NavbarContainer from "../Navbar/Navbar";
import Introduction from "../Introduction/Introduction";
const Banner = () => {
  return (
    <BannerSection>
      <div className="main-container">
        <NavbarContainer></NavbarContainer>
        <Introduction></Introduction>
      </div>
    </BannerSection>
  );
};
const BannerSection = styled.div`
  .main-container {
    background-image: url(banner.png);
    width: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
export default Banner;
