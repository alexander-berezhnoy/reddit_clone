import React from "react";
import Navbar from "@/src/components/Navbar";

// @ts-ignore
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
