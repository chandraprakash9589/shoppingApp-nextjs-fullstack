"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "../../app/globals.css";
import { MdLightMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mount, setMount] = React.useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log({ currentTheme });
  React.useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return <></>;
  }
  return (
    <>
      <header className="h-20 bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60 flex px-10 drop-shadow-[0px_2px_10px_rgba(2,0,0) text-black">
        <nav className="w-full mx-auto flex justify-between items-center px-2 text-black font-serif text-xl">
          <Image
            src={"/bugwear.png"}
            priority={true}
            alt="logo"
            width={1000}
            height={1000}
            className="w-44"
          />
          <ul className="flex items-center gap-x-5">
            <li>
              <Link
                className="transition-all duration-300 hover:text-[--main-color]"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 hover:text-[--main-color]"
                href={"/t-shirt"}
              >
                T-Shirt
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 hover:text-[--main-color]"
                href={"/bugs"}
              >
                Bugs
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 hover:text-[--main-color]"
                href={"/stickers"}
              >
                Stickers
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 hover:text-[--main-color]"
                href={"/hoodies"}
              >
                Hoodies
              </Link>
            </li>
            <li>
              <Link
                className=" btn transition-all duration-300 hover:text-[--main-color]"
                href={"/login"}
              >
                Login
              </Link>
            </li>
            <button>
              {currentTheme === "light" ? (
                <MdLightMode onClick={() => setTheme("dark")} />
              ) : (
                <CiLight onClick={() => setTheme("light")} />
              )}
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
