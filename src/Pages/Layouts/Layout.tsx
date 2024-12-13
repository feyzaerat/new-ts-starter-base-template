import React from "react";
import Router from "../../Routes/Router";
import { Navbar, Sidebar } from "../../components";
import Footer from "../../components/Footer/Footer";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="d-flex f-direction-column justify-center align-i-center">
        <div className="scrollable-layout">
        <Router />
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;
