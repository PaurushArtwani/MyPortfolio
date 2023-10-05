import styled from "styled-components";

const HeaderSection = (props) => {
  return (
    <>
      <Header>
        <div className="row">
          <div className="col-md-12 text-center p-5">
            <h3>{props.header}</h3>
          </div>
        </div>
      </Header>
    </>
  );
};

const Header = styled.section`
  h3 {
    font-size: 36px;
    font-weight: 400;
    color: #fff;
    position: relative;
    z-index: 0;
    padding-bottom: 0px;
  }
`;
export default HeaderSection;
