import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Sponsors from "./components/Sponsors";
import Trustee from "./components/Trustee";
import Offerings from "./components/Offerings";
import Represent from "./components/Represent";
import Certification from "./components/Certification";
import Process from './components/Process';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Sponsors />
      <Trustee />
      <Offerings />
      <Represent />
      <Certification />
      <Process />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
