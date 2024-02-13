import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AllVans from "./components/AllVans";
import Dashboard from "./components/host/Dashboard";
import ErrorPage from "./components/ErrorPage";
import Host from "./components/host/Host";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import VanInfo from "./components/VanInfo";
import Vans from "./components/Vans";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Income from "./components/host/Income";
import HostVans from "./components/host/Vans";
import VanDetails from "./components/host/VanDetails";
import Reviews from "./components/host/Reviews";

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
        <Route path="host" element={<Host />}>
          <Route path="" element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<VanDetails />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
