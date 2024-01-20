import * as React from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Home from './home.tsx'
import Daily from './daily.tsx'
import Notes from './notes.tsx'
import Crud from './crud.tsx'

const ViewContainer = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/crud" element={<Crud />} />
    </Routes>
  );
};

export default ViewContainer