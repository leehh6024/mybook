import React, { useState } from "react";
import styled from "styled-components";
import WarningDialog from "./WarningDialog.jsx";
import HelloDialog from "./HelloDialog.jsx";
import ErrorDialog from "./ErrorDialog.jsx";
import NoticeDialog from "./NoticeDialog.jsx";

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
  const onHelloOpen = () => {
    setHelloOpen(true);
  };
  const onHelloClose = () => {
    setHelloOpen(false);
  };
  const onErrorOpen = () => {
    setErrorOpen(true);
  };
  const onErrorClose = () => {
    setErrorOpen(false);
  };
  const onNoticeOpen = () => {
    setNoticeOpen(true);
  };
  const onNoticeClose = () => {
    setNoticeOpen(false);
  };

  return (
    <>
      <DialogContainer>
        <DialogButtonList>
          <button onClick={onWarnOpen}>OPEN Warning DIALOG</button>
          <button onClick={onWarnClose}>CLOSE Warning DIALOG</button>
          <button onClick={onHelloOpen}>OPEN Hello DIALOG</button>
          <button onClick={onHelloClose}>CLOSE Hello DIALOG</button>
          <button onClick={onErrorOpen}>OPEN Error DIALOG</button>
          <button onClick={onErrorClose}>CLOSE Error DIALOG</button>
          <button onClick={onNoticeOpen}>OPEN Notice DIALOG</button>
          <button onClick={onNoticeClose}>CLOSE Notice DIALOG</button>
        </DialogButtonList>

        {warnOpen && (
          <WarningDialog
            title={"경고다이얼로그"}
            text={"이 창을 띄워두시면 위험합니다."}
          ></WarningDialog>
        )}

        {helloOpen && (
          <HelloDialog
            title={"인사다이얼로그"}
            text={
              "만나서 반갑습니다. 리액트는 배우면 배울수록 재미있어지는것 같아요."
            }
          ></HelloDialog>
        )}

        {errorOpen && (
          <ErrorDialog
            title={"오류다이얼로그"}
            text={"해당 방식은 지원하지 않는 기능입니다."}
          ></ErrorDialog>
        )}

        {noticeOpen && (
          <NoticeDialog
            title={"공지다이얼로그"}
            text={"종합프로젝트 심사일은 11/4(금) 입니다."}
          ></NoticeDialog>
        )}
      </DialogContainer>
    </>
  );
}

const DialogContainer = styled.div`
  position: absolute;
  transform: translate(50%, 50%);
  width: 50%;
  height: 50vh;
  background-color: white;
  border: 2px solid #6ac47a;
  border-radius: 15px;

  margin: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const DialogButtonList = styled.div`
  width: 100%;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  button {
    width: 80px;
    background-color: white;
    margin-left: 2px;
    margin-right: 2px;
    border-radius: 5px;

    font-family: "Pretendard";
    font-styled: bold;
    font-weight: 700;
    font-size: 16px;
  }
`;
