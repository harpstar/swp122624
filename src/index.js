/*

=========================================================
* Now UI Kit React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2023 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
// import LoginPage from "views/examples/LoginPage.js";
import SecondLandingPage from "views/examples/LandingPage.js";
import ProfilePage from "./pages/ProfilePage.js";

import LandingPage from 'pages/LandingPage';
import LoginPage from "./pages/LoginPage";
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar";
import IndexNavbar from "./components/Navbars/IndexNavbar";
import PathwaysPage from "./pages/PathwaysPage";
import AquaculturePathway from "./pages/pathways/AquaculturePathway";
import CleanWaterPathway from "./pages/pathways/CleanWaterPathway";
import EnvironmentalEngineeringPathway from "./pages/pathways/EnvironmentalEngineeringPathway";
import GreenBuildingPathway from "./pages/pathways/GreenBuildingPathway";
import MarineBiologyPathway from "./pages/pathways/MarineBiologyPathway";
import './assets/css/custom.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pathways" element={<PathwaysPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* pathway pages */}
        <Route path="/pathway/aquaculture" element={<AquaculturePathway />} />
        <Route path="/pathway/clean-water" element={<CleanWaterPathway />} />
        <Route path="/pathway/environmental-engineering" element={<EnvironmentalEngineeringPathway />} />
        <Route path="/pathway/green-building" element={<GreenBuildingPathway />} />
        <Route path="/pathway/marine-biology" element={<MarineBiologyPathway />} />



        <Route path="/index2" element={<Index />} />
        <Route path="/nucleo-icons" element={<NucleoIcons />} />
        <Route path="/landing-page" element={<SecondLandingPage />} />
        <Route path="/login-page" element={<LoginPage />} />

        <Route path="*" element={<Navigate to="/index" replace />} />
      </Routes>
    </BrowserRouter>
);
