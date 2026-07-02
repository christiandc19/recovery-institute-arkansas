import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Treatment from "../pages/Treatment/Treatment";
import Programs from "../pages/Programs/Programs";
import Addiction from "../pages/Addiction/Addiction";
import AddictionDetail from "../pages/AddictionDetail/AddictionDetail";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import ScrollToTop from "../components/ScrollToTop";
import IOP from "../pages/IOP/IOP";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import Accessibility from "../pages/Accessibility/Accessibility";
import ProgramDetail from "../pages/ProgramDetail/ProgramDetail";
import Admissions from "../pages/Admissions/Admissions";
import ThankYou from "../pages/ThankYou/ThankYou";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/addiction" element={<Addiction />} />
          <Route path="/addiction/:slug" element={<AddictionDetail />} />
          <Route path="/iop-substance-abuse" element={<IOP />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;