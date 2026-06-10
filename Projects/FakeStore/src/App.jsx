import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    

    <BrowserRouter>

      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>

    </BrowserRouter>

    </>
  );
}

export default App;