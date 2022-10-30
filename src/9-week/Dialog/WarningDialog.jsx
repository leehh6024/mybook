import React from "react";
import styled from "styled-components";

export default function WarningDialog(props) {
  return (
    <>
      <WarningDialogContainer>
        {props.title} <br />
        {props.text}
      </WarningDialogContainer>
    </>
  );
}

const WarningDialogContainer = styled.div`
  width: auto;
  border: 1px solid black;
  border-radius: 5px;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #ee5612;
  font-family: "Pretendard";
  font-styled: bold;
  font-weight: 700;
  font-size: 16px;
`;
