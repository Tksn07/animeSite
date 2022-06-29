import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/index"
import YurucampHome from "./components/pages/yurucamp/index"

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="yurucamp" element={<YurucampHome />}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Root;
