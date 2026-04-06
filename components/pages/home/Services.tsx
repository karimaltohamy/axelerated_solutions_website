"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-surface-container-low px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-1 bg-secondary/5 text-secondary rounded-full font-bold text-sm">خدماتنا</span>
          <h2 className="text-3xl md:text-4xl font-black text-secondary">حلول تقنية متكاملة لعملك</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "dns", title: "البنية التحتية", desc: "تصميم وبناء مراكز البيانات المتطورة وشبكات الأعمال عالية الأداء.", delay: 0.1 },
            { icon: "cloud", title: "الحوسبة السحابية", desc: "حلول سحابية هجينة ومرنة تتناسب مع احتياجات نمو مؤسستك.", delay: 0.2 },
            { icon: "support_agent", title: "الخدمات المُدارة", desc: "دعم فني ومراقبة على مدار الساعة لضمان استمرارية الأعمال.", delay: 0.3 },
            { icon: "security", title: "الأمن السيبراني", desc: "حماية شاملة ضد التهديدات الرقمية وتأمين بياناتك الحساسة.", delay: 0.4 },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: service.delay, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface-container-lowest p-8 rounded-xl vision-shadow bento-card border-r-4 border-primary"
            >
              <div className="w-14 h-14 rounded-full bg-[#57C5E0]/10 flex items-center justify-center mb-6 text-[#57C5E0]">
                <span className="material-symbols-outlined" data-icon={service.icon}>{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{service.desc}</p>
              <Link className="text-primary font-bold text-sm inline-flex items-center gap-2 hover:gap-4 transition-all" href="#">
                اقرأ المزيد <span className="material-symbols-outlined text-xs" data-icon="arrow_back">arrow_back</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}