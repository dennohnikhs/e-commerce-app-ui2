import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import "./App.css";
import LoginForm from "./components/login/LoginForm";
import Contact from "./components/contact/Contact";
import Privacy from "./components/privacy/Privacy";
import SignUpForm from "./components/sign-up/SignUpForm";

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
