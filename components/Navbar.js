/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12">
          <Logo />
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav dir="horizontal" scheme="light" />
        </div>
        <div className="w-3/12 text-right hidden md:block">
          <Button href="#contact" variant="outline-yellow" pill>
            Contact
          </Button>
        </div>
        <div className="md:hidden w-9/12 text-right">
          <img src="/menu.svg" alt="menu" className="inline-block" onClick={() => setOffCanvas(true)}/>
        </div>
      </div>
      <div className={`fixed bg-white p-10 z-10 top-0 h-full w-full md:hidden transition-all ${offCanvas ? "right-0" : "-right-full"}`}>
        <img src="/close.svg" className="absolute top-10 right-8 w-8" onClick={() => setOffCanvas(false)} />
        <Nav 
          dir="vertical"
          scheme="dark"
        />
      </div>
    </>
  );
}
