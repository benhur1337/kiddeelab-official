"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faPhone } from "@fortawesome/free-solid-svg-icons";

import ScrollCarousel from "scroll-carousel-react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { faLine } from "@fortawesome/free-brands-svg-icons";

const navlinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label:"Summer Camps",
    href:"/summer-camps"
  },
  /*
  {
    label: "After School",
    href: "/after-school",
  },
  {
    label: "Workshops",
    href: "/workshops",
  },
  
  */
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Our Team",
    href: "/our-team",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  const [y, setY] = useState(-1000);
  const [opacity, setOpacity] = useState(0);

  const openMenu = () => {
    setY(0);
    setOpacity(1);
  };

  const closeMenu = () => {
    setY(-1000);
    setOpacity(0);
  };

  const [isOpen, setIsOpen] = useState(false);
  const route = usePathname();

  return (
    <div>
      <div className="fixed z-50 w-screen max-w-full top-0 flex flex-row justify-between items-center p-6 bg-white drop-shadow">
        <Link className="flex flex-row items-center gap-4" href="/">
          <Image
            src="/logo.png"
            height={100}
            width={100}
            className="size-[1.875rem] object-contain cursor-pointer"
            alt="logo"
          />
          <div className="tracking-tighter text-3xl font-bold text-orange-500">
            Kiddee Lab
          </div>
        </Link>
        <button
          className="text-xl font-semibold border-sky-500 border p-2 px-4 rounded bg-white text-sky-500 hover:bg-sky-500 hover:text-white duration-500 cursor-pointer"
          onClick={openMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <motion.div
        initial={{ y: y, visibility: "hidden" }}
        animate={{ y: y, visibility: "visible" }}
        transition={{ type: "spring", bounce: "0.5" }}
        className={
          "z-50 fixed bg-sky-500 top-0 flex flex-col items-start gap-4 font-bold p-6 h-screen w-screen max-w-full"
        }
      >
        <div className="absolute left-0 w-screen h-screen object-contain flex justify-center items-center z-0">
          <Image className="opacity-20" src='/logo-white.png' height={300} width={300} alt=""/>
        </div>
        <button
          className="text-xl self-end font-semibold border border-white p-2 px-4 rounded bg-none text-white z-50"
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        {navlinks.map((item: any, key: number) => (
          <Link
            className={
              item.href == route
                ? "underline underline-offset-8 text-white text-2xl hover:scale-110 duration-500 z-50"
                : "text-white text-2xl hover:scale-110 duration-500 z-50"
            }
            key={key}
            href={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}

        <Link className="z-50" href={"https://page.line.me/kiddeelab"}>
          <button className="text-white text-2xl font-semibold border border-white hover:bg-white hover:text-sky-500 duration-500 p-2 rounded">
            Free Trial
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export function NavbarInvis() {
  const [isOpen, setIsOpen] = useState(false);
  const route = usePathname();

  return (
    <div className="opacity-0 pointer-events-none">
      <div className="w-screen max-w-full top-0 flex flex-row justify-between items-center p-6 bg-white">
        <Link href="/" className="text-3xl font-bold tracking-tighter">
          Kiddee Lab
        </Link>
        <button
          className="text-xl font-semibold border p-2 rounded bg-black text-white"
          onClick={() => setIsOpen(true)}
        >
          Open Menu
        </button>
      </div>
      {isOpen ? (
        <div className="fixed bg-black top-0 flex flex-col items-start gap-4 font-bold p-6 h-screen w-screen  max-w-full">
          <button
            className="text-xl self-end font-semibold border p-2 rounded bg-black text-white"
            onClick={() => setIsOpen(false)}
          >
            Close Menu
          </button>
          {navlinks.map((item: any, key: number) => (
            <Link
              className={
                item.href == route
                  ? "underline underline-offset-8 text-white text-2xl"
                  : "text-white text-2xl"
              }
              key={key}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export function Footer() {
  const route = usePathname();
  return (
    <div className="flex flex-col p-6 mt-[100px] bg-white text-sky-500">
      <div className="flex flex-col md:flex-row justify-evenly md:max-w-[1100px] md:mx-auto w-full gap-4">
        <div className="">
          <Link href="/">
            <Image src="/logo.png" height={50} width={50} alt="logo-footer" />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-3xl font-bold tracking-tighter">Navigation</div>
          {navlinks.map((item: any, key: number) => (
            <Link
              className={
                item.href == route
                  ? "underline underline-offset-4 text-orange-500 font-semibold hover:scale-110 duration-500"
                  : "hover:scale-110 duration-500"
              }
              key={key}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-3xl font-bold tracking-tighter">Socials</div>
          <Link
            className="hover:scale-110 duration-500"
            href="https://www.facebook.com/kiddeelab/"
          >
            Facebook
          </Link>
          <Link
            className="hover:scale-110 duration-500"
            href="https://www.instagram.com/kiddeelab"
          >
            Instagram
          </Link>
          <Link
            className="hover:scale-110 duration-500"
            href="https://page.line.me/kiddeelab"
          >
            Line
          </Link>
        </div>
      </div>
      <div className="h-[100px]" />
      <div className="text-center opacity-40">Kiddee Lab - Est.2018</div>
    </div>
  );
}

export function Scroll(props: { children: React.ReactNode }) {
  return (
    <ScrollCarousel
      autoplay
      autoplaySpeed={8}
      speed={7}
      onReady={() => console.log("I am ready")}
      className="z-[-5]"
    >
      {props.children}
    </ScrollCarousel>
  );
}

export function PhoneBar() {
  return (
    <div className="z-50 fixed bottom-0 left-0 w-screen flex md:hidden flex-row justify-evenly items-center text-white font-semibold">
      <Link href="https://page.line.me/kiddeelab" className="bg-orange-500 h-full w-1/2 p-6 text-center flex flex-row items-center justify-center gap-2"><FontAwesomeIcon icon={faLine}/>{"LINE"}</Link>
      <Link href="tel:083-887-1199" className="bg-orange-400 h-full w-1/2 p-6 text-center flex flex-row items-center justify-center gap-2"><FontAwesomeIcon icon={faPhone}/>{"Call Us"}</Link>
    </div>
  );
}
