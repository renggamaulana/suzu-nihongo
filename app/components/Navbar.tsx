import Link from "next/link"

export default function Navbar() {
    return(
        <nav className="flex justify-between p-5 shadow">
          <h1 className="text-xl font-bold">
            <Link href="/">Suzu Nihongo</Link>
          </h1>
          <ul className="flex gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
          </ul>
        </nav>
    )
}