import React from "react";
import "./App.css";

import "@fortawesome/fontawesome-free";
import LogRocket from "logrocket";
import Admin from "../src/components/pages/adminpages/Admin";
import Main from "./components/pages/homepage/Main";

function App() {
  const currentPage = window.location.href;
  const tailPage = currentPage.substring(currentPage.lastIndexOf("/") + 1);

  LogRocket.init("hjb3fu/recipe-world");



  console.log(tailPage);

  return (
    <>
      {tailPage === "admin" ? (
        <Admin />
      ) : (
        <Main />
      )}
    </>
  );
}

export default App;
