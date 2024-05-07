"use client";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Contact() {
  const date = new Date();
  return (
    <>
      <div
        className="w-screen h-full bg-gray-900 bg-opacity-25 flex flex-col justify-center items-center my-10
      space-y-4"
      >
        
        <div>
          <Card className="bg-transparent border-none text-slate-300">
            <CardHeader className="flex flex-col justify-center items-center">
              <CardTitle className="text-center">
                Contact me
              </CardTitle>
              <CardDescription>Send a quick message to connect</CardDescription>
              <a href="google.com" target="blank" className="text-slate-300">
          Email: sreyasree202@gmail.com
        </a>
            </CardHeader>
            <CardFooter className="flex justify-center items-center space-x-3">
              <a href="https://github.com/Sreyasree-001" target="blank" title="gitHub"><IoLogoGithub /></a>
              <a href="https://www.linkedin.com/in/sreyasree-sasmal-a5274324b/" target="blank" title="linkedin"><FaLinkedin /></a>
              <a href="https://www.facebook.com/profile.php?id=100087570413361" target="blank" title="facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/_meteoric_melody_01/" target="blank" title="instagram"><FaInstagram /></a>
              <a href="mailto:sreyasree202@gmail.com" title="email"><MdEmail /></a>
            </CardFooter>
            <p className="text-gray-500 font-light self-center text-center">© Copyright {date.getFullYear()} All rights reserved</p>
          </Card>
        </div>
      </div>
    </>
  );
}
