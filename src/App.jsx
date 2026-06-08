import React from 'react';
import Navbar from './components/Navbar';
import { GlobalStyles } from './styles/GlobalStyles';
import Hero from './sections/Hero';
import Welcome from './sections/Welcome';
import WhatsBrewing from './sections/WhatsBrewing';
import AboutUs from './sections/AboutUs';
import Committee from './sections/Committee';
import JoinForm from './sections/JoinForm';
import Events from './sections/Events';
import Gallery from './sections/Gallery';
import Resources from './sections/Resources';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Welcome />
      <WhatsBrewing />
      <AboutUs />
      <Committee />
      <JoinForm />
      <Events />
      <Gallery />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}