import './About/About.css'
import Image from 'next/image'

export default function About() {

    return (
      <section className="about">
        <h1>Tentang Kami</h1>
        <div className="container">
          <div className="content">
            <h2>Tentang Ayam bakar Kami</h2>
            <p>
              Ayam bakkar tradisional dengan bumbu nusantara yang dibakar
              langsung di atas arang, bukan oven.
            </p>
            <p>
              Kami memilih ayam segar dan kualitas terbaik setiap hari dan bumbu
              yang diracik sendiri agar rasa tetap konsisten, beraroma asap, dan
              meresap hingga kedalam.
            </p>

            <button className="cta-about-menu btn-primary">Lihat Menu</button>
          </div>

          <div className="image">
            <Image
              src="/ay.jfif"
              width={250}
              height={250}
              alt="Ayam Bakar Nusantara"
            />
          </div>

        </div>
      </section>
    );
}