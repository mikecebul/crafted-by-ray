import Link from 'next/link'
import Logo from './logo'
import { Menu } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/navMenu"

const navigation = [
  { name: "Home", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Merch", href: "#" },
  { name: "Contact", href: "#" },
]

const Navbar = () => {
  return (
    <nav className='px-8 pt-8' >
      <div className='flex justify-between'>
        <div>
          <Logo />

        </div>
        <div className=''>
          <Dialog>
            <DialogTrigger>
              <Menu />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <Logo />
                </DialogTitle>
                <DialogDescription>
                  <div className='flex flex-col space-y-4 text-2xl font-bold text-black'>
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
    </nav>
  )
}

export default Navbar