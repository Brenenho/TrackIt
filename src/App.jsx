import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import styled from "styled-components"
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/cadastro" element={<SignUp />}></Route>
          
          
        </Routes>
      </BrowserRouter>
    
    </>
      
  )
}

export default App
