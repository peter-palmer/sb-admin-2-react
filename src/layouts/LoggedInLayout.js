import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function LoggedInLayout({ children }) {
   return (
      <Sidebar>
         <div id="content">
            <Navbar />
            <div className="container-fluid">{children}</div>
         </div>
         <Footer />
      </Sidebar>
   );
}

export default LoggedInLayout;
