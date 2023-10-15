import { Button } from "react-bootstrap";
import styled from "styled-components";

const ButtonSection = (props) => {
  return <CustomButton className="Button-custom">{props.button}</CustomButton>;
};

const CustomButton = styled.button`
  background: transparent;
  font-family: "Roboto", sans-serif;
  padding: 14px 49px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #db9a64;
  color: #db9a64;
  border-radius: 0px;
  transition: background 0.7s ease-in-out;
  &:hover {
    background: #db9a64;
    color: white;
  }
`;

export default ButtonSection;
