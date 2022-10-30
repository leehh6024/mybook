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
  width: 20%;
  border: 1px solid black;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
