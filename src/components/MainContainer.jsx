import Banner from "./BannerPage/Banner";
import About from "./AboutMe/About";
import styled from "styled-components";

const MainContainer=()=>{
    return (
        <>
            <MainContainerSection>
            <div>
                <Banner></Banner>
            </div>
            <div className="about-section">
                <About></About>
                </div>
                </MainContainerSection>
            </>

        );
}
const MainContainerSection = styled.section`
.about-section{
    background-color:#311E25;
}
`
export default MainContainer;