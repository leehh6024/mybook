import styled from "styled-component";
import "./DisplayFlex.css";

const StyleButton = styled.button`
  color: white;
  background-color: orange;
  font-size: 15px;
`;

const BlueButton = styled.button`
  color: white;
  background-color: blue;
  font-size: 15px;
`;
const MyButton = styled.button`
color: white;
background-coor: yellow
font-size: 15px;
`;
const YellowButton = styled(MyButton)`
  color: black;
`;

export default function StyledButtons() {
  return (
    <div className="flexContainer5">
      <StyleButton>StyleButton</StyleButton>
      <BlueButton>BlueButton</BlueButton>
      <YellowButton>YellowButton</YellowButton>
    </div>
  );
}
