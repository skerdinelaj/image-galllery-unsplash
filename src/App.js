import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetImages from "./home/GetImages";
import PhotoBio from "./photo/PhotoBio";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetImages />}></Route>
          <Route path="/:id" element={<PhotoBio />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
