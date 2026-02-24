import "./Navbar/Navbar.css";
import Link from "next/link";
import Image from "next/image";
import { Icons } from '@/lib/Icons'

export default function Navbar() {
  return (
    <nav className="navbar">
      <header>

        <div className="logo">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        </div>

        <ul className="nav-menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#tentang-kami">Tentang Kami</Link>
          </li>
          <li>
            <Link href="#menu">Katalog</Link>
          </li>
        </ul>

        <button className="contact-cta">hubungi Kami <Icons.ArrowRight size={18} /> </button>
      </header>
    </nav>
  );
}
