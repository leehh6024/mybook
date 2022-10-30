import React from "react";
import styled from "styled-components";

export default function HelloDialog(props) {
  return (
    <>
      <HelloDialogContainer>
        {props.title} <br />
        {props.text}
      </HelloDialogContainer>
    </>
  );
}

const HelloDialogContainer = styled.div`
  width: auto;
  border: 1px solid black;
  border-radius: 5px;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #6abef3;
  font-family: "Pretendard";
  font-styled: bold;
  font-weight: 700;
  font-size: 16px;
`;
