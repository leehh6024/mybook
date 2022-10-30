import React from "react";
import styled from "styled-components";

export default function ErrorDialog(props) {
  return (
    <>
      <ErrorDialogContainer>
        {props.title} <br />
        {props.text}
      </ErrorDialogContainer>
    </>
  );
}

const ErrorDialogContainer = styled.div`
  width: auto;
  border: 1px solid black;
  border-radius: 5px;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #ee0000;
  font-family: "Pretendard";
  font-styled: bold;
  font-weight: 700;
  font-size: 16px;
`;
