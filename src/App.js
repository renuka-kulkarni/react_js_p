import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import Course from './components/Course';
import Allcourse from './components/Allcourse';
import AddCourse from "./components/AddCourse";
import { Container, Row, Col } from "reactstrap";
import Header from './components/Header';
import Menus from "./components/Menus";
import About from "./components/About";
import Contact from "./components/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Consider removing or integrating btnHandle if it's not being used
  const btnHandle = () => {
    toast.success("Done");
  }

  return (
    <Router>
      <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <Menus />
          </Col>
          <Col md={8}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/view-courses" element={<Allcourse />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;