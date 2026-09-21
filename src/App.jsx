import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WhoWeAre from "./pages/WhoWeAre.jsx";
import HowWeWork from "./pages/HowWeWork.jsx";
import Platform from "./pages/Platform.jsx";
import Leadership from "./pages/Leadership.jsx";
import About from "./pages/About.jsx";
import Insights from "./pages/Insights.jsx";
import InsightArticle from "./pages/InsightArticle.jsx";
import ThoughtLeadership from "./pages/ThoughtLeadership.jsx";
import Contact from "./pages/Contact.jsx";
import RequestAccess from "./pages/RequestAccess.jsx";
import FAQ from "./pages/FAQ.jsx";
import LegalNotice from "./pages/LegalNotice.jsx";
import { LEGAL_PAGES } from "./data/legalContent.js";
import NotFound from "./pages/NotFound.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SiteMetadata from "./components/SiteMetadata.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteMetadata />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/faq" element={<FAQ />} />
        <Route path="/insights/thought-leadership" element={<ThoughtLeadership />} />
        <Route path="/insights/:slug" element={<InsightArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-access" element={<RequestAccess />} />
        {Object.keys(LEGAL_PAGES).map(path=><Route key={path} path={"/"+path} element={<LegalNotice/>}/>)}

        <Route path="/company" element={<Navigate to="/who-we-are" replace />} />
        <Route path="/governance" element={<Navigate to="/how-we-work" replace />} />
        <Route path="/who-we-serve" element={<Navigate to="/who-we-are" replace />} />
        <Route path="/partners" element={<Navigate to="/contact" replace />} />
        <Route path="/faq" element={<Navigate to="/insights/faq" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
