import React from "react";
import LeftSidebar from "./parts/LeftSidebar";
import Header from "./parts/Header";
import Content from "./parts/Content";
export default function Admin() {
  return (
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
        <Header />
        <Content />
      </div>
  );
}
