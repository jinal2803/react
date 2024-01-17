import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from "./Components/Header";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Blog from "./Pages/Blog";
import Single_blog from "./Pages/Single_blog";









function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<><Header /> <Index /> <Footer /></>}></Route>
          <Route path="/About" element={<><Header /> <About /> <Footer /></>}></Route>
          <Route path="/Contact" element={<><Header /> <Contact /> <Footer /></>}></Route>
          <Route path="/Login" element={<> <Header /><Login /> <Footer /></>}></Route>
          <Route path="/Signup" element={<> <Signup /> </>}></Route>
          <Route path="/Profile" element={<> <Header /><Profile /> <Footer /></>}></Route>
          <Route path="/Single_blog/:id" element={<><Header/> <Single_blog/> <Footer/></>} ></Route>
          <Route path="/Blog" element={<> <Header /><Blog /> <Footer /></>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

