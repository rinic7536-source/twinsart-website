"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// 12 produk sample
const products = [
  { title: "Classic Bouquet", desc: "Elegant premium flowers", img: "/images/buket1.jpeg", tag: "Popular", price: "100.000"},
  { title: "Snack Bouquet", desc: "Sweet snacks combo", img: "/images/buket1.jpeg", tag: "Best Seller" },
  { title: "Seserahan Premium", desc: "Luxury wedding set", img: "/images/buket1.jpeg", tag: "Luxury" },
  { title: "Romantic Roses", desc: "12 roses for love", img: "/images/buket1.jpeg", tag: "Romantic" },
  { title: "Pastel Bloom", desc: "Soft pastel bouquet", img: "/images/buket1.jpeg", tag: "Elegant" },
  { title: "Snack Box Bundle", desc: "Premium snack box", img: "/images/buket1.jpeg", tag: "Snack" },
  { title: "Wedding Essentials", desc: "Complete wedding design", img: "/images/buket1.jpeg", tag: "Wedding" },
  { title: "Birthday Special", desc: "Birthday floral set", img: "/images/buket1.jpeg", tag: "Happy" },
  { title: "Anniversary Set", desc: "Anniversary bouquet", img: "/images/buket1.jpeg", tag: "Anniversary" },
  { title: "Elegant Standing", desc: "Tall bouquet premium", img: "/images/buket1.jpeg", tag: "Premium" },
  { title: "Mini Gift Flowers", desc: "Small cute bouquet", img: "/images/buket1.jpeg", tag: "Mini" },
  { title: "Holiday Celebration", desc: "Festive bouquet", img: "/images/buket1.jpeg", tag: "Festive" },
];

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">

     {/* NAVBAR */}
<header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
  <nav className="container mx-auto px-8 lg:px-16 py-4 flex items-center justify-between">

    {/* LOGO */}
    <Link href="#home" className="text-2xl font-bold text-pink-600">
      TwinsArt
    </Link>

    {/* MENU BUTTON (mobile) */}
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-pink-600 focus:outline-none"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
    </div>

    {/* NAV LINKS */}
    <div
      className={`${
        open ? "block" : "hidden"
      } md:flex md:items-center md:gap-8 text-gray-700`}
    >
      <Link href="#home" className="block py-2 hover:text-pink-500 transition">
        Home
      </Link>
      <Link href="#products" className="block py-2 hover:text-pink-500 transition">
        Collection
      </Link>
      <Link href="#testi" className="block py-2 hover:text-pink-500 transition">
        Reviews
      </Link>

      {/* CTA BUTTON (desktop) */}
      <Link
        href="https://wa.me/6289516252332"
        className="hidden md:inline-block bg-pink-600 text-white px-5 py-2 rounded-xl hover:bg-pink-700 transition"
      >
        Order Now
      </Link>
    </div>

  </nav>
</header>

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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="/images/buket1.jpeg"
          alt="Hero image"
          className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-3xl shadow-2xl object-cover"
        />

      </div>
    </section>
{/* PRODUCTS */}
<section
  id="products"
  className="py-24 px-6 lg:px-12 xl:px-16 bg-gradient-to-r from-pink-30 via-white to-pink-100"
>
  <div className="max-w-screen-lg mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">
      Featured Collection
    </h2>

    {/* grid dengan auto rows fr → semua card ikut tinggi terbesar */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-fr">
      {products.map((p, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
        >
          {/* IMAGE */}
          <div className="relative w-full h-36 md:h-44">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-sm">
              {p.tag}
            </span>
          </div>

          {/* DETAILS → flex col supaya tombol berada di bawah */}
          <div className="p-4 flex flex-col flex-1">
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-800">{p.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{p.desc}</p>

              <p className="mt-2 font-semibold text-pink-600">{p.price}</p>
            </div>

            {/* tombol berada di paling bawah card */}
            <a
              href="https://wa.me/6289516252332"
              className="mt-4 bg-pink-600 text-white text-center py-2 rounded-md hover:bg-pink-700 transition"
            >
              Order Now
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* WHY CHOOSE US */}
<section className="bg-gray-50 py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">
      Why Choose <span className="text-pink-600">TwinsArt?</span>
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      We create handcrafted gifts with premium materials, thoughtful details, 
      and a touch of elegance—perfect for every special moment.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Premium Quality",
          desc: "High-grade materials & flawless craftsmanship.",
          icon: "🎀",
        },
        {
          title: "Fast Delivery",
          desc: "Same-day delivery for urgent surprises.",
          icon: "⏱️",
        },
        {
          title: "Eco Packaging",
          desc: "Sustainable materials, eco-friendly choices.",
          icon: "🌿",
        },
        {
          title: "Custom Designs",
          desc: "Special requests & fully personalized gifts.",
          icon: "✨",
        },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg p-8 rounded-xl flex flex-col items-center text-center"
        >
          <div className="text-4xl mb-3">{item.icon}</div>
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* TESTIMONIAL */}
      <section id="testi" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">What Customers Say</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
              “Buketan dari TwinsArt cantik banget, rapi & premium!”
            </motion.div>
            <motion.div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
              “Packaging-nya elegan, cocok buat surprise orang tersayang.”
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-600 text-white text-center py-24 px-6">
        <h2 className="text-4xl font-bold">Ready to Gift Someone Special?</h2>
        <p className="mt-2 text-lg opacity-90">Chat us now and customize your bouquet</p>
        <a
          href="https://wa.me/6289516252332"
          className="mt-6 inline-block bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Start Order
        </a>
      </section>

     {/* FOOTER */}
<footer className="bg-white text-gray-700 border-t pt-12 pb-6">
  <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

    {/* Info Kontak */}
    <div className="space-y-3">
      <h3 className="text-xl font-bold text-pink-600">TwinsArt Florist</h3>
      <p>Bouquet & Gift Studio</p>
      <p>Alamat: GG. Al-Barokah No.39, RT..004/RW.001, Jatijajar, Kec. Tapos, Kota Depok, Jawa Barat 16451</p>
      <p>Phone: +62 9516252332</p>
      <p>Email: info@twinsart.com</p>
      <p>Instagram : @twinsart.florist @twinsart.seserahan.depok</p>
    </div>

    {/* Peta Google Maps */}
<div className="lg:col-span-2">
  <h3 className="text-lg font-semibold mb-2">Find Us on Map</h3>

  <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7484868774027!2d106.8623544!3d-6.426351299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb000608031d%3A0xf89cd3411f488cad!2sTwinsart%20Florist!5e0!3m2!1sid!2sid!4v1778822981747!5m2!1sid!2sid"
      className="w-full h-full border-0"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title="TwinsArt Florist Location"
    ></iframe>
  </div>
</div>
</div>

  <p className="mt-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} TwinsArt Florist. All rights reserved.
  </p>
</footer>
    </div>
  );
}