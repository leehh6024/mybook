import React from "react";

const ThemeContext = React.createContext("light");

export default function ContextApp() {
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
  return (
    <div>
      <ThemeContext.Consumer>
        {(value) => (
          <div style={{ margin: 50, padding: 50, backgroundColor: value }}>
            <p>[ContextApp] | for example, data convey having Context</p>
            <button>Check</button>
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}
