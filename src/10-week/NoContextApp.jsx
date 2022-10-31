import React from "react";

export default function NoContextApp() {
  return <Toolbar theme="yellow" />;
}

function Toolbar(props) {
  return (
    <div>
      <ThemeButton theme={props.theme} />
    </div>
  );
}
function ThemeButton(props) {
  return (
    <div>
      <Button theme={props.theme} />
    </div>
  );
}
function Button(props) {
  const myColor = props.theme;
  return (
    <div
      style={{
        backgroundColor: myColor,
        margin: 50,
        padding: 50,
      }}
    >
      <p> No Context, for example props convey data only.</p>
      <button>Check</button>
    </div>
  );
}
