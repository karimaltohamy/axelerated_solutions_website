"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-[95%] mx-auto md:mx-0 md:w-full z-50 fixed top-3 left-0 right-0 ">
      <div className="container mx-auto">
        <nav className="border-2 border-white/20 w-full bg-white/30 backdrop-blur-md shadow-[0_20px_40px_rgba(13,45,103,0.08)] rounded-[50px] p-3 flex flex-row justify-between items-center gap-4">
          <Link href="/" className="w-[90%]  w-[100px]">
            <Image
              src="https://axs.sa/img/axs-logo.svg"
              alt="الحلول المتسارعة"
              width={30}
              height={80}
              className="w-full h-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex gap-8 items-center font-['Cairo']">
            <Link className="text-[#57C5E0] font-bold border-b-2 border-[#57C5E0] pb-1 transition-all duration-300" href="#">
              الرئيسية
            </Link>
            <Link className="text-[#3E494C] hover:text-[#57C5E0] transition-all duration-300" href="#">
              من نحن
            </Link>
            <Link className="text-[#3E494C] hover:text-[#57C5E0] transition-all duration-300" href="#">
              الخدمات
            </Link>
            <Link className="text-[#3E494C] hover:text-[#57C5E0] transition-all duration-300" href="#">
              المنتجات
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="bg-gradient-to-r from-secondary to-primary-container text-white px-6 py-2 rounded-full font-bold text-sm transition-all hover:opacity-80">
              طلب عرض سعر
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md rounded-[30px] mt-2 p-6 shadow-[0_20px_40px_rgba(13,45,103,0.08)]">
            <div className="flex flex-col gap-4 items-center font-['Cairo']">
              <Link className="text-[#57C5E0] font-bold border-b-2 border-[#57C5E0] pb-1" href="#" onClick={() => setIsMenuOpen(false)}>
                الرئيسية
              </Link>
              <Link className="text-[#3E494C] hover:text-[#57C5E0] transition-all duration-300" href="#" onClick={() => setIsMenuOpen(false)}>
                من نحن
              </Link>
              <Link className="text-[#3E494C] hover:text-[#57C5E0] transition-all duration-300" href="#" onClick={() => setIsMenuOpen(false)}>
                الخدمات
              </Link>
              <Link className="text-[#3E494C] hover:text-[#57C5E0] transition-all duration-300" href="#" onClick={() => setIsMenuOpen(false)}>
                المنتجات
              </Link>
              <button className="bg-gradient-to-r from-secondary to-primary-container text-white px-6 py-2 rounded-full font-bold text-sm transition-all hover:opacity-80 w-full">
                طلب عرض سعر
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}