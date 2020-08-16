import React from "react";
import About from "../components/aboutus";
import Services from "../components/resume";
import Counter from "../components/service";
import Portfolio from "../components/portfolio";
import Testimonials from "../components/testimonials";
import BlogSection from "../components/blog";
import Contact from "../components/contactus";

function Main() {
  return (
    <div>
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <BlogSection />
      <Contact />
    </div>
  );
}

export default Main;
