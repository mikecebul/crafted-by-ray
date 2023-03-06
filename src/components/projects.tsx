import Image from "next/image";
import Link from "next/link";
import React from "react";
import Thumbnail from "../../public/thumbnail 1.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="bg-amber-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <h2 className="pt-16 text-4xl font-semibold text-center">
        YouTube Videos
      </h2>
      <div className="flex flex-col w-full pt-8">
        <div className="flex flex-col items-center">
          <Image
            className="object-cover w-full"
            src={Thumbnail}
            alt="YouTube video preview"
          />
          <div className="p-8">
            <p className="text-3xl font-semibold">DIY Wooden Card Box</p>
            <p className="pt-4 text-lg">
              Looking for rustic or boho wedding decor? Watch me turn three 1x4
              pine boards into a...
            </p>
            <div className="flex justify-center pt-4">
              <Link
                href="#"
                className="px-8 py-2 text-xl font-semibold border-4 border-black rounded-full"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full pt-8">
        <div className="flex flex-col items-center">
          <Image
            className="object-cover w-full"
            src={Thumbnail}
            alt="YouTube video preview"
          />
          <div className="p-8">
            <p className="text-3xl font-semibold">DIY Wooden Card Box</p>
            <p className="pt-4 text-lg">
              Looking for rustic or boho wedding decor? Watch me turn three 1x4
              pine boards into a...
            </p>
            <div className="flex justify-center pt-4">
              <Link
                href="#"
                className="px-8 py-2 text-xl font-semibold border-4 border-black rounded-full"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full pt-8">
        <div className="flex flex-col items-center">
          <Image
            className="object-cover w-full"
            src={Thumbnail}
            alt="YouTube video preview"
          />
          <div className="p-8">
            <p className="text-3xl font-semibold">DIY Wooden Card Box</p>
            <p className="pt-4 text-lg">
              Looking for rustic or boho wedding decor? Watch me turn three 1x4
              pine boards into a...
            </p>
            <div className="flex justify-center pt-4">
              <Link
                href="#"
                className="px-8 py-2 text-xl font-semibold border-4 border-black rounded-full"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
      \
    </motion.div>
  );
};

export default Projects;
