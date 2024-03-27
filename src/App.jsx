import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import LoginForm from "./components/LoginForm";
import Privacy from "./components/Privacy";
import SignUpForm from "./components/SignUpForm";
import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
