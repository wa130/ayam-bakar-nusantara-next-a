import "./Hero/Hero.css";
import Image from "next/image";
import { Icons } from '@/lib/Icons'

export default function Hero() {
  return (
    <section className="hero">
      <div className="left">
        <Image src="/logo.png" width={130} height={130} alt="logo" />
        <h2>Ayam Bakar Nusantara</h2>
        <span>Ayam Bakas Asli Bumbu Nusantara</span>
        <span>Dibakar Langsung, Berempah, Bikin Nagih</span>
        <div className="cta">
          <button className="cta-btn btn-b">Katalog</button>
          <button className="cta-btn btn-primary">
            Pesan Sekarang <Icons.ArrowRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
