"use client";
import Navbar from "./Navbar";
import "./landing.css";
import { Separator } from "@/components/ui/separator";

import { Header } from "./Header";
import Content from "./projects/content";
import About from "./about/about";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen max-h-fit bg-black flex flex-col overflow-scroll overflow-x-hidden">
        <Navbar/>
        <div className="my-10" id="header">
        <Header />
        </div>
        <div id="about" className="w-full self-center flex justify-center items-center mt-16 sm:w-2/3">
          <About />
        </div>
        
        <div id="projects" className="self-center flex justify-center items-center">
        <Content />
        </div>
        <div id="contacts" className="self-center flex justify-center items-center">
        <Contact/>
        </div>
      </div>
    </>
  );
}
