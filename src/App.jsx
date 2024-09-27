import {Routes, Route} from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
// import FaqComponent from "./components/FaqComponent";

import HomePage from "./pages/HomePage";
import VegetablesPage from "./pages/VegetablesPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
  <div>

    <NavbarComponent/>

    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/vegetables" Component={VegetablesPage} />
      <Route path="/testimonial" Component={TestimonialPage} />
      <Route path="/syaratKeten" Component={SyaratKetenPage} />
      <Route path="/faq" Component={FaqPage} />
    </Routes>

    {/* <FooterComponent/> */}

  </div>
  );
}

export default App
