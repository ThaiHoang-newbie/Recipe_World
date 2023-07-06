import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import "@fortawesome/fontawesome-free";
import LogRocket from "logrocket";
import Admin from "../src/components/pages/adminpages/Admin";

function App() {
  const currentPage = window.location.href;
  const tailPage = currentPage.substring(currentPage.lastIndexOf("/") + 1);

  LogRocket.init("hjb3fu/recipe-world");

  const reRenderContent = (paths) =>
    paths.map((path, index) => (
      <Route
        key={index}
        path={path.path}
        index={path.index}
        element={path.element}
      />
    ));

  console.log(tailPage);

  return (
    <BrowserRouter className="container-fluid">
      {tailPage === "admin" ? (
        <Admin />
      ) : (
        <Routes>{reRenderContent(routes)}</Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
