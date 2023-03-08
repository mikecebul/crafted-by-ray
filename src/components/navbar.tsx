import Link from "next/link";
import Logo from "./ui/logo";
import { Menu } from 'lucide-react'
import { motion } from "framer-motion";
import { navigation } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/navMenu";

const Navbar = () => {
  return (
    <motion.nav
      className="px-8 pt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>
        <div className="">
          <Dialog>
            <DialogTrigger>
            <Menu size={32} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <Logo />
                </DialogTitle>
                <DialogDescription>
                  <div className="flex flex-col space-y-4 text-2xl font-bold text-black">
                    {navigation.map((item, index) => (
                      <Link href={item.href} key={index}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
