import React from "react";
import Home from "./pages/home/Home";
import OurWork from "./pages/work/OurWork";
import NotFound from "./pages/notFound/NotFound";
import OurServices from "./pages/ourServices/OurServices";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import SubWorkLayout from "./layout/SubWorkLayout";
import SubServicesLayout from "./layout/SubServicesLayout";
import Repairs from "./pages/ourServices/subServices/Repairs";
import PaintWorking from "./pages/ourServices/subServices/PaintWorking";
import UpholsteryRow from "./pages/ourServices/subServices/upholsteryFolder/UpholsteryRow";
import AboutUs from "./componets/home/AboutUs";
import Contact from "./pages/contact/Contact";
import BmwRow from "./pages/work/subWork/BmwRow";
import BuggatiRow from "./pages/work/subWork/BuggatiRow";
import FerrariRow from "./pages/work/subWork/FerrariRow";
import LemborghiniRow from "./pages/work/subWork/LemborghiniRow";
import MercedesRow from "./pages/work/subWork/MercedesRow";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* main  page */}
            <Route index element={<Home />} />
            <Route path="ourServices" element={<OurServices />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="ourwork" element={<OurWork />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/subworklayout" element={<SubWorkLayout />}>
              {/* our work section */}
              <Route path="bmw" element={<BmwRow />} />
              <Route path="bugatti" element={<BuggatiRow />} />
              <Route path="ferrari" element={<FerrariRow />} />
              <Route path="lamborghini" element={<LemborghiniRow />} />
              <Route path="mercedes" element={<MercedesRow />} />
            </Route>
            <Route path="/subserviceslayout" element={<SubServicesLayout />}>
              {/* our services section */}
              <Route path="repair" element={<Repairs />} />
              <Route path="paintworking" element={<PaintWorking />} />
              <Route path="upholstery" element={<UpholsteryRow />} />
              <Route />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
