"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

/* ===================== PRODUCTS ===================== */

// 🌸 8 BOUQUET
const bouquets = [
  {
    title: "Classic Bouquet",
    desc: "Elegant premium flower arrangement",
    img: "/images/buket1.jpeg",
    tag: "Popular"
  },

  {
    title: "Money Rose Bouquet Round",
    desc: "Romantic money bouquet with rose arrangement",
    img: "/images/moneybouquetround.jpeg",
    tag: "Romantic"
  },

  {
    title: "Pink Medium Bloom Bouquet",
    desc: "Soft pastel pink floral medium bouquet",
    img: "/images/flowerpinkmedium.jpeg",
    tag: "Elegant"
  },

  {
    title: "Kinder Joy & SilverQueen Bouquet",
    desc: "Birthday sweet chocolate bouquet combination",
    img: "/images/kinderjoyxsilverqueen.jpeg",
    tag: "Happy"
  },

  {
    title: "Mini Sunflower Bouquet",
    desc: "Bright sunflower mini arrangement for special moments",
    img: "/images/sunflowermini.jpeg",
    tag: "Anniversary"
  },

  {
    title: "Thumbelina Grand Bouquet",
    desc: "Large premium Thumbelina floral arrangement",
    img: "/images/thumbelina.jpeg",
    tag: "Premium"
  },

  {
    title: "Fresh Rose Mini Bouquet",
    desc: "Small fresh rose bouquet for simple gifting",
    img: "/images/mawarfresh.jpeg",
    tag: "Mini"
  },

  {
    title: "Money Bouquet Festive",
    desc: "Luxury money bouquet for celebration and gifts",
    img: "/images/moneybouquet.jpeg",
    tag: "Festive"
  },
];

// 💍 4 SESERAHAN
const seserahan = [
  { title: "Seserahan Premium", desc: "Luxury Crystal Box", img: "/images/crystalbox1.jpeg", tag: "Luxury" },
  { title: "Wedding Ring", desc: "Ring Box Crystal", img: "/images/ringbox.jpeg", tag: "Ring" },
  { title: "Surprise Hidden Box", desc: "Mystery gift arrangement with sweet treats inside", img: "/images/hiddenbox.jpeg", tag: "Surprise" },
  { title: "Mahar Wedding", desc: "Elegant traditional wedding dowry arrangement", img: "/images/mahar.jpeg", tag: "Wedding" },
];

/* ===================== TESTIMONIAL ===================== */

const testimonials = [
  {
    name: "Fitri Sha",
    text: "suka bnget sm buket nya, selalu realpict, apalgi ak suka request bouquetnya, jujur menarik dan puas bnget. dsni suka jualan makanan juga enak bnget terutama mochi nya suka bnget. Thanks kak Twins art, pertahankan dan terus berkembang yaa",
  },
  {
    name: "hill raa",
    text: "Saya suka, barangnya bagus banget😗, persis seperti yang ada di gambar 🫰🏻🫰🏻🫰🏻🫰🏻",
  },
  {
    name: "Mayu Ratna Sari",
    text: "Dari 2th lalu sudah sering order macam² bouquet bunga, sheet mask, cemilan, uang dll selalu memuaskan hasilnya dan harga nya selalu terjangkau. Sering ada promo jg pd event dan moment² tertentu jd lebih menguntungkan jg. Skrg udh ada hampers & parcel jg 😍 maybe kedepannya makin banyak lg yg pasti owner twins ini gak pelit diskonan😍🤭💞",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
        <nav className="container mx-auto px-8 lg:px-16 py-4 flex items-center justify-between">

          <Link href="#home" className="text-2xl font-bold text-pink-600">
            TwinsArt
          </Link>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-pink-600 text-2xl">
              ☰
            </button>
          </div>

          <div className={`${open ? "block" : "hidden"} md:flex md:items-center md:gap-8 text-gray-700`}>
            <Link href="#home" className="block py-2 hover:text-pink-500">Home</Link>
            <Link href="#products" className="block py-2 hover:text-pink-500">Bouquet</Link>
            <Link href="#seserahan" className="block py-2 hover:text-pink-500">Seserahan</Link>
            <Link href="#testi" className="block py-2 hover:text-pink-500">Reviews</Link>

            <Link
              href="https://wa.me/6289516252332"
              className="hidden md:inline-block bg-pink-600 text-white px-5 py-2 rounded-xl hover:bg-pink-700"
            >
              Order Now
            </Link>
          </div>

        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="pt-28 pb-24 bg-gradient-to-br from-pink-50 via-white to-pink-100"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 justify-items-center gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="pl-4 md:pl-8 lg:pl-12 text-left"
          >
            <span className="text-sm font-semibold bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
              Handmade Luxury Gift Studio
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Gifts that feel <br /> premium & meaningful
            </h1>

            <p className="mt-4 text-gray-600 max-w-md">
              Discover our curated range of bouquets, snacks, and seserahan
              designed for all your special moments.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition"
              >
                Explore Collection
              </a>
              <a
                href="https://wa.me/6289516252332"
                className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
              >
                Chat WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.img
            src="/images/buket1.jpeg"
            alt="Bouquet"
            className="w-80 md:w-96 rounded-3xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

{/* ================= PRODUCTS ================= */}
<section
  id="products"
  className="relative py-24 px-6 lg:px-12 xl:px-16 overflow-hidden bg-gradient-to-b from-pink-50 via-white to-pink-50"
>

  {/* 🌫️ fog / kabut effect */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-20 left-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute top-40 right-10 w-80 h-80 bg-rose-200 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20"></div>
  </div>

  {/* CONTENT */}
  <div className="relative max-w-7xl mx-auto text-center">

    <h2 className="text-3xl font-bold mb-12">Our Collections</h2>

    {/* BOUQUET */}
    <h3 className="text-2xl font-bold mb-6 text-left">Bouquet</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {bouquets.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition"
        >
          <img src={p.img} className="w-full h-56 object-cover rounded-xl" />

          <div className="mt-4 text-left">
            <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
              {p.tag}
            </span>

            <h3 className="text-lg font-bold mt-2">{p.title}</h3>
            <p className="text-gray-600 text-sm">{p.desc}</p>

            <a
              href={`https://wa.me/6289516252332?text=Halo%20saya%20mau%20order%20${encodeURIComponent(p.title)}`}
              target="_blank"
              className="mt-4 block w-full bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 text-center transition"
            >
              Order Now
            </a>
          </div>
        </motion.div>
      ))}
    </div>

    {/* SESERAHAN */}
    <section id="seserahan" className="scroll-mt-28">
      <h3 className="text-2xl font-bold mb-6 text-left">Seserahan</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {seserahan.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition"
          >
            <img src={p.img} className="w-full h-56 object-cover rounded-xl" />

            <div className="mt-4 text-left">
              <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                {p.tag}
              </span>

              <h3 className="text-lg font-bold mt-2">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.desc}</p>

              <a
                href={`https://wa.me/6289516252332?text=Halo%20saya%20mau%20order%20${encodeURIComponent(p.title)}`}
                target="_blank"
                className="mt-4 block w-full bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 text-center transition"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

  </div>
</section>
      

{/* ================= TESTIMONIAL (BALANCED POP) ================= */}
<section id="testi" className="py-20 bg-pink-50 text-center px-6">
  <h2 className="text-3xl font-bold mb-12">What Customers Say</h2>

  <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
    {testimonials.map((t, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35, delay: i * 0.08 }}
        whileHover={{ y: -4 }}
        className="bg-white p-6 rounded-2xl shadow-md text-left transition-all duration-300"
      >
        <p className="text-gray-700 leading-relaxed">
          "{t.text}"
        </p>

        <div className="mt-4 font-semibold text-pink-600">
          {t.name}
        </div>

        <div className="text-yellow-400 mt-1 tracking-wider">
          ★★★★★
        </div>
      </motion.div>
    ))}
  </div>
</section>


   
     {/* FOOTER */}
{/* FOOTER */}
<footer className="relative overflow-hidden text-gray-700 pt-12 pb-6 bg-gradient-to-br from-pink-50 via-white to-pink-100">

  {/* 🌸 Decorative background shapes */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
    <div className="absolute top-20 right-0 w-52 h-52 bg-rose-200 rounded-full blur-3xl opacity-40"></div>
    <div className="absolute bottom-0 left-1/2 w-60 h-60 bg-pink-300 rounded-full blur-3xl opacity-20"></div>
  </div>

  {/* 🌸 subtle floral pattern (icon feel) */}
  {/* <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="floral" width="120" height="120" patternUnits="userSpaceOnUse">
          <text x="10" y="30" fontSize="24">🌸</text>
          <text x="70" y="80" fontSize="20">🌷</text>
          <text x="40" y="110" fontSize="18">✨</text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#floral)" />
    </svg>
  </div> */}

  {/* CONTENT */}
  <div className="relative container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

   {/* Info Kontak */}
<div className="space-y-2 text-sm leading-relaxed">
  <h3 className="text-xl font-bold text-pink-600 mb-2">
    TwinsArt Florist
  </h3>

  <p className="text-gray-600">
    Bouquet & Gift Studio
  </p>

  <div className="space-y-1 text-gray-600">
    <p>
      <span className="font-medium text-gray-800">Alamat:</span>{" "}
      GG. Al-Barokah No.39, RT.004/RW.001, Jatijajar, Depok
    </p>

    <p>
      <span className="font-medium text-gray-800">Kontak:</span>{" "}
      +62 9516252332
    </p>

    <p>
      <span className="font-medium text-gray-800">Email:</span>{" "}
      twinsart.florist25@gmail.com
    </p>

    <p>
      <span className="font-medium text-gray-800">Instagram:</span>{" "}
      @twinsart.florist @twinsart.seserahan.depok
    </p>
  </div>
</div>

    {/* Map */}
    <div className="lg:col-span-2">
      <h3 className="text-lg font-semibold mb-2">
        📍 Find Us on Map
      </h3>

      <div className="w-full h-48 rounded-2xl overflow-hidden shadow-xl border border-pink-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7484868774027!2d106.8623544!3d-6.426351299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb000608031d%3A0xf89cd3411f488cad!2sTwinsart%20Florist!5e0!3m2!1sid!2sid!4v1778822981747!5m2!1sid!2sid"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          title="TwinsArt Florist Location"
        ></iframe>
      </div>
    </div>

  </div>

  {/* Bottom text */}
  <p className="relative mt-8 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} TwinsArt Florist • Made with 💗 & flowers
  </p>
</footer>
    </div>
  );
}