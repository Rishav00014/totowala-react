import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Book from "./pages/Book";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";
import Ride from "./pages/Ride";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import UnderCons from "./component/UnderCons";


const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="ride" element={<Ride />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="blog" element={<Blog />} />
        <Route path="book" element={<Book />} />
        <Route path="contact" element={<Contact />} />
        <Route path="media" element={<Media />} />
        <Route path="delivery" element={<Delivery />} />

        <Route path="*" element={<UnderCons />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;