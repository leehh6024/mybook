import React, { useState, useContext } from "react";
import "./PageColor.css";

const ColorContext = React.createContext(null);

export default function PageColor() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ColorContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ColorContext.Provider>
  );
}

function Page() {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  const { isDark } = useContext(ColorContext);
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h2>Context Using Lecture</h2>
    </header>
  );
}

function Content() {
  const { isDark } = useContext(ColorContext);
  return (
    <content
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <p>
        Today, This class is 10th class and we are learning Context of React.
      </p>
    </content>
  );
}

function Footer() {
  const { isDark, setIsDark } = useContext(ColorContext);
  const toggleColor = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <button className="button" onClick={toggleColor}>
        ColorReversing
      </button>
    </footer>
  );
}
