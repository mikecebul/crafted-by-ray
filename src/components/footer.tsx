import React from "react";
import LogoFooter from "./ui/logoFooter";
import { navigation } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16">
      <svg
        viewBox="0 0 100 10"
        height="100%"
        width="100%"
        preserveAspectRatio="none"
        className="block"
      >
        <polygon points="100,10 100,0 0,10" className="fill-amber-200" />
      </svg>
      <div className="flex flex-col pt-10 bg-amber-200">
        <div className="flex justify-center">
          <LogoFooter />
        </div>
        <div className="flex justify-center px-8">
          <div className="flex flex-col">
            <ul className="pb-4 text-2xl font-semibold">Pages</ul>
            {navigation.map((item, index) => (
              <li key={index} className="pb-4 list-none">
                <Link href={item.href} className='text-xl font-light'>
                  {item.name}
                </Link>
              </li>
            ))}
            <ul></ul>
          </div>
          <div className="p-16" />
          <div className="flex flex-col">
            <ul className="pb-4 text-2xl font-semibold">Social</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
