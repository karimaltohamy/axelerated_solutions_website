"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="container mx-auto rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-right flex flex-col md:flex-row items-center justify-between gap-12 animated-gradient"
        style={{
          background: "linear-gradient(135deg, #FFFFFF 0%, #57C5E0 30%, #0D2D67 45%, #57C5E0 60%, #F5F5F5 70%, #0D2D67 80%, #FFFFFF 90%, #FFFFFF 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-black text-secondary">لديك مشروع؟ دعنا نتحدث</h2>
          <p className="text-secondary text-lg max-w-xl">خبرائنا جاهزون لمساعدتك في رسم مستقبلك التقني بأحدث المعايير العالمية.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <button className="kinetic-pill px-12 py-5 bg-white text-secondary rounded-full font-black text-xl shadow-2xl flex items-center gap-4">
            اتصل بنا <span className="material-symbols-outlined" data-icon="call">call</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}