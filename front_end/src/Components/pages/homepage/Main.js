import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { homepageRoutes } from "../../../routes";
export default function Main() {
  const reRenderContent = (paths) =>
    paths.map((path, index) => (
      <Route
        key={index}
        path={path.path}
        index={path.index}
        element={path.element}
      />
    ));
  return (
    <BrowserRouter className="container-fluid">
      <Routes>{reRenderContent(homepageRoutes)}</Routes>
    </BrowserRouter>
  );
}
