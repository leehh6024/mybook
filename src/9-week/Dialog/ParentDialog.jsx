import React, { useState } from "react";
import styled from "styled-components";
import WarningDialog from "./WarningDialog.jsx";

export default function ParentDialog() {
  const [warnOpen, setWarnOpen] = useState(false);
  const [helloOpen, setHelloOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [noticeOpen, setNoticeOpen] = useState(false);

  const onWarnOpen = () => {
    setWarnOpen(true);
  };
  const onWarnClose = () => {
    setWarnOpen(false);
  };

  return (
    <>
      <button onClick={onWarnOpen}>WARNING DIALOG</button>
      <button onClick={onWarnClose}>WARNING DIALOG Close</button>
      <DialogContainer>
        {warnOpen && (
          <WarningDialog
            title={"경고다이얼로그"}
            text={"이 창을 띄워두시면 위험합니다."}
          ></WarningDialog>
        )}
      </DialogContainer>
    </>
  );
}

const DialogContainer = styled.div`
  width: 80%;
  height: 50vh;
  border: 1px solid black;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
