import React from "react";
import "./App.css";
import Navbar from "./components/pages/homepage/parts/Navbar";
import HeroArea from "./components/pages/homepage/parts/HeroArea";
import TopCategory from "./components/pages/homepage/parts/TopCategory";
import Footer from "./components/pages/homepage/parts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { homepageRoutes } from "./routes";
import "@fortawesome/fontawesome-free";

function App() {
  const reRenderContent = (paths) =>
    paths.map((path) => (
      <Route path={path.path} index={path.index} element={path.element} />
    ));
  return (
    <BrowserRouter className="container-fluid">
      <Navbar></Navbar>
      <HeroArea></HeroArea>
      <TopCategory />
      <Routes>{reRenderContent(homepageRoutes)}</Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
