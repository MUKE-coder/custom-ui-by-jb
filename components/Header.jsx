import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header() {
  return (
    <div className="header lg:px-16 px-8">
      <Navbar />
      <Hero />
    </div>
  );
}
