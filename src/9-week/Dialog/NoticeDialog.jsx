import React from "react";
import styled from "styled-components";

export default function NoticeDialog(props) {
  return (
    <>
      <NoticeDialogContainer>
        {props.title} <br />
        {props.text}
      </NoticeDialogContainer>
    </>
  );
}

const NoticeDialogContainer = styled.div`
  width: auto;
  border: 1px solid black;
  border-radius: 5px;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #6aab77;
  font-family: "Pretendard";
  font-styled: bold;
  font-weight: 700;
  font-size: 16px;
`;
