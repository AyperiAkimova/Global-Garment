import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import About from './About';
import Production from './Production';
import Clients from './Clients';
import Command from './Command';
import Vacancy from './Vacancy';
import Footer from './Footer';

function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Production />
      <Clients />
      <Command />
      <Vacancy />
      <Footer />
    </>
  );
}

export default Home;


