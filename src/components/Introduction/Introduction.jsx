import styled from 'styled-components';
const Introduction = () =>
{
    return (
        <>
            <IntroductionSection className="container">
                <div className="row position-relative items-center">
                    <div className="col-lg-9 ">
                        <div className="slider_text">
                            <h3>
                                Hi There,I am Paurush<br/>
                                <span>Frontend Developer</span>
                            </h3>
                        </div>
                    </div>
                    <div class="my_img d-none d-lg-block">
                        <img src="Profile-img.png" alt="" />
                    </div>
                </div>
            </IntroductionSection>
        </>
    ) ;
}

const IntroductionSection = styled.div`
.slider_text h3 {
    font-family: "Roboto", sans-serif!important;
    font-size: 80px!important;
    text-transform: capitalize;
    font-weight: 300;
    line-height: 90px;
    color: #fff;
    margin-bottom: 55px;
}
.slider_text{
    padding: 303px 0;
}
.slider_text span{
    color: #DB9A64;
}
.my_img {
    position: absolute;
    right: -70px;
    bottom: 0;
}
`

export default Introduction