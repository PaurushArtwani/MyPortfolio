import HeaderSection from "../HeaderSection/HeaderSection"
import styled from "styled-components"
const About = () =>
{
    return <>
        <Aboutsection>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <HeaderSection header={ "About Me" }></HeaderSection>
                </div>
                    <div className="col-lg-4">
                        <img />
                    </div>
                    <div className="col-lg-8">
                        <p className="lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p className="lead">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>

            </div>


            </div>
            </Aboutsection>
        </>

}
const Aboutsection = styled.section`
.lead {
    font-weight: 200;
    line-height: 1.5;
    color:white
}
`
export default About;