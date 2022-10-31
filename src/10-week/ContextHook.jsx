import React, { useContext } from "react";

const ThemeContext = React.createContext("light");

export default function ContextHook() {
  return (
    <ThemeContext.Provider value="lavender">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}
function ThemeButton() {
  return (
    <div>
      <Button />
    </div>
  );
}
function Button() {
  const value = useContext(ThemeContext);

  return (
    <div style={{ margin: 50, padding: 50, backgroundColor: value }}>
      <p>[ContextHook] | for example, data convey having Context</p>
      <button>Check</button>
    </div>
  );
}
