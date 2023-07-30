
// import './App.css';

import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import WebAndMobile from "./components/WebAndMobile";
import WhatWeDo from "./components/WhatWeDo";
import WhatWeHadDone from "./components/WhatWeHadDone";

function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <WhatWeDo />
      <WhatWeHadDone />
      <About />
      <FAQ />
      <WebAndMobile />
      <Footer />
    </div>
  );
}

export default App;
