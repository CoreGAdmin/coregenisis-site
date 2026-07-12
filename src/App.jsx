import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Platform from "./pages/Platform.jsx";
import Governance from "./pages/Governance.jsx";
import WhoWeServe from "./pages/WhoWeServe.jsx";
import Partners from "./pages/Partners.jsx";
import Company from "./pages/Company.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import FAQ from "./pages/FAQ.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/who-we-serve" element={<WhoWeServe />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/company" element={<Company />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}
