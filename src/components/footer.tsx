import React from "react";
import LogoFooter from "./ui/logoFooter";
import { navigation } from "@/lib/utils";
import Link from "next/link";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";
import { useForm } from "react-hook-form";

const Footer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example"));

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
        <div className="flex justify-center pb-8">
          <LogoFooter />
        </div>
        <div className="flex justify-center px-8 pb-8">
          <div className="flex flex-col">
            <ul className="pb-4 text-2xl font-semibold">Pages</ul>
            {navigation.map((item, index) => (
              <li key={index} className="pb-4 list-none last:pb-0">
                <Link href={item.href} className="text-xl font-light">
                  {item.name}
                </Link>
              </li>
            ))}
          </div>
          <div className="p-16" />
          <div className="flex flex-col">
            <ul className="pb-4 text-2xl font-semibold">Social</ul>
            <li className="pb-4 list-none">
              <Youtube size={28} />
            </li>
            <li className="pb-4 list-none">
              <Instagram size={28} />
            </li>
            <li className="pb-4 list-none">
              <Facebook size={28} />
            </li>
          </div>
        </div>
        {/* Contact Form */}
        <div className="">
          <h3 className="pb-4 text-4xl font-semibold text-center">
            Contact me with an idea!
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-8 shadow">
              <div className="px-4 py-5 space-y-6 bg-amber">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium leading-6"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Jane Doe"
                    type="text"
                    {...register("name", { required: true })}
                  />
                </div>
              </div>
            </div>

            <label htmlFor="phone">Phone</label>
            <input
              placeholder="231-555-5555"
              type="tel"
              {...register("phone", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />

            <label htmlFor="email">Email</label>
            <input
              placeholder="jane@gmail.com"
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            <label htmlFor="message">Message</label>
            <input
              placeholder="..."
              type="text"
              {...register("message", {
                required: true,
                minLength: 3,
                maxLength: 1000,
              })}
            />

            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
