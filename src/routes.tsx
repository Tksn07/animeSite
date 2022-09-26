import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/index";
import YurucampHome from "./components/pages/yurucamp/index";
import Music from "./components/pages/music/index";
import Video from "./components/pages/video";
import ReactQuerySample from "./components/pages/reactQuery";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="yurucamp" element={<YurucampHome />}></Route>
        <Route path="video" element={<Video />}></Route>
        <Route path="music" element={<Music />}></Route>
        <Route
          path="queryProviderSample"
          element={<ReactQuerySample />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
