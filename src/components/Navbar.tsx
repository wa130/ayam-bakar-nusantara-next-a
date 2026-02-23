import "./Navbar/Navbar.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      <header>
        <div className="logo">
          <Image src="/logo.png"
           alt="logo"
           width={70}
           height={70} />
        </div>

        <ul className="nav-menu">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#menu">Menu</Link>
          </li>
          <li>
            <Link href="#tentang-kami">Tentang Kami</Link>
          </li>
          <li>
            <Link href="#kontak">Kontak</Link>
          </li>
        </ul>
      </header>
    </nav>
  );
}
