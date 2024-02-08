import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AllVans from "./components/AllVans";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import VanInfo from "./components/VanInfo";
import Vans from "./components/Vans";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import "/node_modules/flowbite/dist/flowbite.min.css";
import "/node_modules/flowbite/dist/flowbite.min.js";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="vans" element={<Vans />}>
          <Route path="" element={<AllVans />} />
          <Route path=":id" element={<VanInfo />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
