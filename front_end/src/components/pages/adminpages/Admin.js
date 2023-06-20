
import React from "react";
import LeftSidebar from "./parts/LeftSidebar";
import Header from "./parts/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
export default function Admin() {
  const reRenderContent = (paths) =>
    paths.map((path) => (
      <Route path={path.path} index={path.index} element={path.element} />
    ));
  return (
    <>
      <BrowserRouter>
        <div>
          {/*  Body Wrapper */}
          <div
            className="page-wrapper"
            id="main-wrapper"
            data-layout="vertical"
            data-navbarbg="skin6"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed"
          >
            <LeftSidebar />
            <div className="body-wrapper">
            <Header />
              <Routes>{reRenderContent(routes)}</Routes>
            </div>
            
            
            
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
