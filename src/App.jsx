import React from "react";
import { Navigation } from "./components/Navigation";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  const hasAnimated = useIntersectionObserver();
  const showScrollTop = useScrollToTop();
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <Hero hasAnimated={hasAnimated}/>
      <About hasAnimated={hasAnimated}/>
    </div>
  );
};

export default App;
