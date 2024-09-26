import Link from "next/link"

export default function Navbar() {
    return(
        <nav className="flex justify-between p-5 shadow text-white bg-gradient-to-r from-[#088395] to-[#37B7C3]">
          <h1 className="text-xl font-bold">
            <Link href="/">Suzu Nihongo</Link>
          </h1>
          <ul className="flex gap-5 font-bold">
            <li className="group">
              <Link href="/" className="relative">
                Home
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </li>
            <li className="group">
              <Link href="contact" className="relative">
                Contact
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </li>
            <li className="group">
              <Link href="about" className="relative">
                About
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </li>
          </ul>

        </nav>
    )
}