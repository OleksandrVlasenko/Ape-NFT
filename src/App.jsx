import { useRef } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import { About } from "./sections/About/About";
import { Arts } from "./sections/Arts/Arts";
import { ContactUs } from "./sections/ContactUs/ContactUs";
import { FAQ } from "./sections/FAQ/FAQ";
import { Footer } from "./sections/Footer/Footer";
import { Header } from "./sections/Header/Header";
import { Hero } from "./sections/Hero/Hero";
import { MindMap } from "./sections/MindMap/MindMap";

function App() {
  gsap.registerPlugin(ScrollToPlugin);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  return (
    <>
      <Header ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} ref5={ref5} />
      <main style={{ pointerEvents: "auto" }}>
        <Hero ref5={ref5} />
        <About ref1={ref1} />
        <MindMap ref2={ref2} />
        <FAQ ref3={ref3} />
        <Arts ref4={ref4} />
        <ContactUs ref5={ref5} />
      </main>
      <Footer />
    </>
  );
}

export default App;
