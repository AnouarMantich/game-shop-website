import React, { createContext, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Main from "./pages/Main";

export const AppContext = createContext();

const App = () => {
  const [library, setLibrary] = useState([]);
  const [bag, setBag] = useState([]);

  return (
    <AppContext.Provider value={{ library, setLibrary, bag, setBag }}>
      <Main></Main>
    </AppContext.Provider>
  );
};

export default App;
