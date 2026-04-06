"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <header ref={ref} className="relative min-h-screen w-full flex items-center overflow-hidden">
      <AnimatedGradientBackground
        Breathing={true}
        startingGap={120}
        gradientColors={[
          "#FFFFFF",
          "#57C5E0",
          "#0D2D67",
          "#57C5E0",
          "#F5F5F5",
          "#0D2D67",
          "#FFFFFF"
        ]}
        gradientStops={[30, 45, 60, 70, 80, 90, 100]}
        animationSpeed={0.015}
        breathingRange={8}
        topOffset={20}
        containerClassName="opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 w-full pt-40 md:pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#57C5E0]/10 text-[#0D2D67] text-sm font-bold tracking-wide border border-[#57C5E0]/20">
              الحلول المتسارعة | رؤية السعودية 2030
            </span>
            <h1 className="text-4xl md:text-5xl font-black hero-gradient-text leading-[1.1] drop-shadow-sm">
              حلول تقنية مبتكرة للمملكة العربية السعودية
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant/90 leading-relaxed max-w-xl font-medium">
              نقدم حلولاً متكاملة في الأمن السيبراني، مراكز البيانات، الحوسبة السحابية، والخدمات المُدارة لتمكين مستقبلنا الرقمي.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="kinetic-pill px-8 py-3 bg-secondary text-white rounded-full font-bold shadow-xl text-lg hover:bg-secondary/90 transition-all">
                استشارة مجانية
              </button>
              <button className="kinetic-pill px-8 py-3 border-2 border-secondary/20 text-secondary rounded-full font-bold text-lg hover:bg-white/50 backdrop-blur-sm transition-all">
                مشاريعنا
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-outline-variant/20">
              <div>
                <p className="text-2xl font-black text-secondary">20+</p>
                <p className="text-sm text-on-surface-variant font-bold">سنة خبرة</p>
              </div>
              <div>
                <p className="text-2xl font-black text-secondary">500+</p>
                <p className="text-sm text-on-surface-variant font-bold">عميل</p>
              </div>
              <div>
                <p className="text-2xl font-black text-secondary">50+</p>
                <p className="text-sm text-on-surface-variant font-bold">شريك</p>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-square group">
              <div className="absolute inset-0 bg-secondary/5 z-10 transition-opacity group-hover:opacity-0"></div>
              <video autoPlay className="absolute inset-0 w-full h-full object-cover" loop muted>
                <source src="https://axs.sa/videos/video.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2.5rem]"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-container/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}