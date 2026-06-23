import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Structure from "./pages/Structure";
import Timeline from "./pages/Timeline";
import Prizes from "./pages/Prizes";
import Rules from "./pages/Rules";
import Team from "./pages/Team";
import CTA from "./components/CTA";

export default function App() {
  // Always show loader on a fresh page load; sessionStorage tracks if it already ran
  const [loading, setLoading] = useState(() => {
    if (typeof sessionStorage !== "undefined") {
      return !sessionStorage.getItem("loaderDone");
    }
    return true;
  });

  const handleDone = () => {
    sessionStorage.setItem("loaderDone", "1");
    setLoading(false);
  };

  if (loading) return <Loader onDone={handleDone} />;


  return (
    <>
      <Navbar />

      <main className="bg-[#f8f9ff] text-[#0f172a] font-grotesk">
        <Home />
        <About />
        <Structure />
        <Timeline />
        <Prizes />
        <Rules />
        <Team />
        <CTA />
      </main>
    </>
  );
}