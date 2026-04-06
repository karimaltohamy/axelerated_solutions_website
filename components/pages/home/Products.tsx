"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      id: "lensec",
      badge: { label: "الأمن الذكي", color: "bg-primary" },
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDplLVkVUcjMTRHJM7C9u7_6aSxD3BOTNZmex62gjbJ-fKX6iq9SPuWcFkg5KoGOYUE5GBgGzKvLBb6068RZvMo4cf28lzittKbKfyPCYdyZfbY9gsWcjqvlsT0sT5gXeh-xNy8i0jO92oqDtlmNe6n6Nqm8bPuxhabnb1ZreNJnX6Pd7SWCR51uLcrkiCJkrdeYCMOSw1PGqf7Xi5_nXS5u7pNP8hSOWqy6b_328aQxWmr-GCt5bxhKjwqq0vsztqIQ1oKkvsO2IM",
      title: "لينسك - حلول المراقبة الذكية المتطورة",
      desc: "نظام Lensec لإدارة الفيديو (VMS) يوفر حلولاً أمنية متكاملة تعتمد على الذكاء الاصطناعي لتحليل البيانات في الوقت الفعلي وضمان أقصى درجات الحماية للمنشآت.",
      features: [
        { icon: "analytics", text: "تحليلات فيديو ذكية" },
        { icon: "integration_instructions", text: "تكامل شامل للأنظمة" },
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKgV4g1F64v_u9LcCy_iAz2uljuG8CHGZFs_DRRaYGfSWTwwrzjgywnyXWbmi4uzTs2FexnNulhwjMG0oltHf7NTDnQUFPDF9lWApmtZgrfmWS2Qr7bmRnvNPVh-eIL1Uqvfyq6IdKalrHI5yeG30YQAegh7p5mFG3Qx7jUVxKfOBSeOoFTWxQ90AUCRZyMFHy0XbiGh6hhDnHh4tPMl7d9xE1JS0GVlzXCL1MRvJYG22KIgsl5v7ajozNV1pqnsDIuqyUn6l6vRE",
      position: "left",
    },
    {
      id: "sowtek",
      badge: { label: "الاتصال الموحد", color: "bg-primary-container" },
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa8noqCeJ0FOxc8lGx-gzIYFr74vv9TFFLKnZWaVD94w4K_po2xVCOBJMetXR63IY2OGcZi4F4VwPs9G-TMYckkg4S1-_ATC8cINmszNukcE8Nc7Aj7KQ_wi97cC3yO_WuTF9lXBRh32uOx_74eG-DYxw3YcmOXkX3mSekMJMEBRK-KA4hGk1r8KcchZou2ZDYnNJFzwrq6bSZBPlfxI1STJjmLGbX6SNghWI6e0fmDSe0HZteSYoaaUjiKL4BhR4yXA7fzjHwtsM",
      title: "صوتك - ثورة في عالم الاتصالات المؤسسية",
      desc: "صوتك هو حل الاتصالات الصوتية الموحد الأقوى في المنطقة، مصمم لربط فرق العمل بكفاءة عالية عبر منصة سحابية واحدة آمنة وسهلة الإدارة.",
      features: [
        { icon: "check", text: "جودة صوت استثنائية ونقاء فائق" },
        { icon: "check", text: "إدارة مركزية عبر واجهة تحكم بديهية" },
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpVmL-ViJBYPk17H_vX_c-ygyvfkR9iO24WTH4whP7iKm8q2KRIDl2tby35kT1FMPq-NrHnUPnRtnhBWkEx5Hrt6YL9iArFm5lUS4RKGWiO1IqhtrNe1i2PPa8b7XPsCSgJC4uz_uqDXV-Ct30WyIt4DXvMxjOumCP9jvij3G6dscPPn6SAQPWtgi0Y-uO3hzokrncillEUarMqaZ4Q_b-wKtcN2gyOlPllg5NHTiYH5lmeQLJKjCdXHj8OiAUydyRwocujIGA8FQ",
      position: "right",
    },
    {
      id: "dara",
      badge: { label: "تحليل البيانات", color: "bg-tertiary-container" },
      title: "دارا - منصة التحليلات الوطنية",
      subtitle: "حلول ذكاء الأعمال والتحليلات الضخمة",
      desc: "منصة \"دارا\" تمنحك القدرة على تحويل البيانات الخام إلى رؤى استراتيجية تدعم اتخاذ القرار، مع لوحات بيانات تفاعلية وقدرات تنبؤية فائقة.",
      features: [
        { icon: "monitoring", text: "لوحات تحكم فورية" },
        { icon: "psychology", text: "نماذج تنبؤ ذكية" },
      ],
      chart: true,
      position: "left",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4"
        >
          <span className="text-sm font-bold text-primary tracking-widest uppercase">محفظة المنتجات</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary">تقنياتنا الخاصة</h2>
        </motion.div>

        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br rounded-[3rem] -rotate-1 scale-105 opacity-50 blur-2xl ${
              index === 0 ? "from-primary/5 to-secondary/5" :
              index === 1 ? "from-primary-container/5 to-secondary/5" :
              "from-primary/5 to-primary-container/5"
            }`}></div>
            <div className={`relative bg-white border border-outline-variant/30 rounded-[3rem] p-8 lg:p-16 shadow-[0_30px_60px_-15px_rgba(13,45,103,0.08)] backdrop-blur-sm overflow-hidden grid lg:grid-cols-12 gap-12 items-center ${
              product.position === "right" ? "lg:flex-row-reverse" : ""
            }`}>
              <div className={`lg:col-span-7 space-y-8 ${product.position === "right" ? "lg:order-2" : ""}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-outline-variant/30 shadow-sm">
                  <span className={`w-2 h-2 rounded-full ${product.badge.color}`}></span>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">{product.badge.label}</span>
                </div>
                <div className="space-y-4">
                  {product.logo && (
                    <img alt={`${product.id} Logo`} className="h-10 object-contain" src={product.logo} />
                  )}
                  {product.title && (
                    <h3 className="text-3xl font-black text-secondary leading-tight">{product.title}</h3>
                  )}
                  {product.subtitle && (
                    <div className="text-2xl font-black text-secondary flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-4xl">hub</span>
                      {product.subtitle}
                    </div>
                  )}
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                  {product.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features?.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 border border-outline-variant/20">
                      <span className="material-symbols-outlined text-primary">{feature.icon}</span>
                      <span className="text-sm font-bold text-secondary">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                  تعرف على المنتج
                </button>
              </div>
              <div className={`lg:col-span-5 relative flex justify-center items-center h-[350px] lg:h-[450px] ${product.position === "right" ? "lg:order-1" : ""}`}>
                <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                {product.image ? (
                  <>
                    <div className="absolute top-10 right-10 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                      <span className="material-symbols-outlined text-primary">videocam</span>
                    </div>
                    <div className="absolute bottom-10 left-10 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                      <span className="material-symbols-outlined text-secondary">security</span>
                    </div>
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                      <img className="w-full h-full object-cover" src={product.image} alt={`${product.id} Product`} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-pulse">
                      <span className="material-symbols-outlined text-primary text-3xl">pie_chart</span>
                    </div>
                    <div className="absolute bottom-5 left-5 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                      <span className="material-symbols-outlined text-secondary">account_tree</span>
                    </div>
                    <div className="relative w-full h-full bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl border-4 border-white shadow-2xl flex items-center justify-center p-10 overflow-hidden">
                      <div className="grid grid-cols-4 gap-2 w-full">
                        <div className="h-32 bg-primary/20 rounded-lg animate-pulse" style={{ height: '40%' }}></div>
                        <div className="h-32 bg-primary/40 rounded-lg animate-pulse" style={{ height: '80%' }}></div>
                        <div className="h-32 bg-primary/30 rounded-lg animate-pulse" style={{ height: '60%' }}></div>
                        <div className="h-32 bg-primary/50 rounded-lg animate-pulse" style={{ height: '100%' }}></div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}