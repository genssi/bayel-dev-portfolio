import React from "react";
import Hero from './sections/Hero/Hero';
import About from "./sections/About/About";
import Cases from "./sections/Cases/Cases";
import ContactForm from "./sections/ContactForm/ContactForm";

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Cases />
      <ContactForm />
    </main>
  );
}

export default App;
