import styled from "styled-components";

const HeaderSection = (props) =>
{
    return (
        <>
        <Header>
        <div className="row">
        <div className="col-md-12 text-center p-5">
            <h3>{props.header}</h3>
        </div>
                </div>
                </Header>
            </>)
}

const Header = styled.section`
h3{
    color:white!important;
    position: relative;
    font-weight: 600;
    padding-top: 20px;
    font-size: 30px;
    font-family: "Baloo Paaji ", cursive;
}


`
export default HeaderSection;