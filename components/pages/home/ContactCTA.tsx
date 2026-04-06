"use client";

import { motion } from "framer-motion";

const gradientColors = [
  "#FFFFFF",
  "#57C5E0",
  "#0D2D67",
  "#57C5E0",
  "#F5F5F5",
  "#0D2D67",
  "#FFFFFF"
];

export default function ContactCTA() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        className="container mx-auto rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-right flex flex-col md:flex-row items-center justify-between gap-12"
        animate={{
          background: [
            "linear-gradient(135deg, #FFFFFF 0%, #57C5E0 30%, #0D2D67 45%, #57C5E0 60%, #F5F5F5 70%, #0D2D67 80%, #FFFFFF 90%, #FFFFFF 100%)",
            "linear-gradient(135deg, #FFFFFF 30%, #57C5E0 45%, #0D2D67 60%, #57C5E0 70%, #F5F5F5 80%, #0D2D67 90%, #FFFFFF 100%, #FFFFFF 0%)",
            "linear-gradient(135deg, #FFFFFF 45%, #57C5E0 60%, #0D2D67 70%, #57C5E0 80%, #F5F5F5 90%, #0D2D67 100%, #FFFFFF 30%, #FFFFFF 0%)",
            "linear-gradient(135deg, #FFFFFF 60%, #57C5E0 70%, #0D2D67 80%, #57C5E0 90%, #F5F5F5 100%, #FFFFFF 30%, #FFFFFF 45%, #FFFFFF 0%)",
            "linear-gradient(135deg, #FFFFFF 70%, #57C5E0 80%, #0D2D67 90%, #57C5E0 100%, #FFFFFF 30%, #FFFFFF 45%, #FFFFFF 60%, #FFFFFF 0%)",
            "linear-gradient(135deg, #FFFFFF 0%, #57C5E0 30%, #0D2D67 45%, #57C5E0 60%, #F5F5F5 70%, #0D2D67 80%, #FFFFFF 90%, #FFFFFF 100%)",
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="z-10 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-secondary">لديك مشروع؟ دعنا نتحدث</h2>
          <p className="text-secondary text-lg max-w-xl">خبرائنا جاهزون لمساعدتك في رسم مستقبلك التقني بأحدث المعايير العالمية.</p>
        </div>
        <div className="z-10">
          <button className="kinetic-pill px-12 py-5 bg-white text-secondary rounded-full font-black text-xl shadow-2xl flex items-center gap-4">
            اتصل بنا <span className="material-symbols-outlined" data-icon="call">call</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
