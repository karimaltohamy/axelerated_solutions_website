export default function Products() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-4">
          <span className="text-sm font-bold text-primary tracking-widest uppercase">محفظة المنتجات</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary">تقنياتنا الخاصة</h2>
        </div>

        {/* Product 1: Lensec */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[3rem] -rotate-1 scale-105 opacity-50 blur-2xl"></div>
          <div className="relative bg-white border border-outline-variant/30 rounded-[3rem] p-8 lg:p-16 shadow-[0_30px_60px_-15px_rgba(13,45,103,0.08)] backdrop-blur-sm overflow-hidden grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-outline-variant/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">الأمن الذكي</span>
              </div>
              <div className="space-y-4">
                <img alt="Lensec Logo" className="h-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDplLVkVUcjMTRHJM7C9u7_6aSxD3BOTNZmex62gjbJ-fKX6iq9SPuWcFkg5KoGOYUE5GBgGzKvLBb6068RZvMo4cf28lzittKbKfyPCYdyZfbY9gsWcjqvlsT0sT5gXeh-xNy8i0jO92oqDtlmNe6n6Nqm8bPuxhabnb1ZreNJnX6Pd7SWCR51uLcrkiCJkrdeYCMOSw1PGqf7Xi5_nXS5u7pNP8hSOWqy6b_328aQxWmr-GCt5bxhKjwqq0vsztqIQ1oKkvsO2IM" />
                <h3 className="text-3xl font-black text-secondary leading-tight">لينسك - حلول المراقبة الذكية المتطورة</h3>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                نظام Lensec لإدارة الفيديو (VMS) يوفر حلولاً أمنية متكاملة تعتمد على الذكاء الاصطناعي لتحليل البيانات في الوقت الفعلي وضمان أقصى درجات الحماية للمنشآت.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary">analytics</span>
                  <span className="text-sm font-bold text-secondary">تحليلات فيديو ذكية</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary">integration_instructions</span>
                  <span className="text-sm font-bold text-secondary">تكامل شامل للأنظمة</span>
                </div>
              </div>
              <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                تعرف على المنتج
              </button>
            </div>
            <div className="lg:col-span-5 relative flex justify-center items-center h-[350px] lg:h-[450px]">
              <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute top-10 right-10 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-primary">videocam</span>
              </div>
              <div className="absolute bottom-10 left-10 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-secondary">security</span>
              </div>
              <div className="absolute top-1/2 -left-4 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-primary-container">dataset</span>
              </div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKgV4g1F64v_u9LcCy_iAz2uljuG8CHGZFs_DRRaYGfSWTwwrzjgywnyXWbmi4uzTs2FexnNulhwjMG0oltHf7NTDnQUFPDF9lWApmtZgrfmWS2Qr7bmRnvNPVh-eIL1Uqvfyq6IdKalrHI5yeG30YQAegh7p5mFG3Qx7jUVxKfOBSeOoFTWxQ90AUCRZyMFHy0XbiGh6hhDnHh4tPMl7d9xE1JS0GVlzXCL1MRvJYG22KIgsl5v7ajozNV1pqnsDIuqyUn6l6vRE" alt="Lensec Product" />
              </div>
            </div>
          </div>
        </div>

        {/* Product 2: Sowtek */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-bl from-primary-container/5 to-secondary/5 rounded-[3rem] rotate-1 scale-105 opacity-50 blur-2xl"></div>
          <div className="relative bg-white border border-outline-variant/30 rounded-[3rem] p-8 lg:p-16 shadow-[0_30px_60px_-15px_rgba(13,45,103,0.08)] backdrop-blur-sm overflow-hidden grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 relative flex justify-center items-center h-[350px] lg:h-[450px]">
              <div className="absolute w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="absolute top-10 left-10 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-secondary">voip</span>
              </div>
              <div className="absolute bottom-10 right-10 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-primary">cloud_done</span>
              </div>
              <div className="absolute top-1/2 -right-4 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-primary-container">support_agent</span>
              </div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpVmL-ViJBYPk17H_vX_c-ygyvfkR9iO24WTH4whP7iKm8q2KRIDl2tby35kT1FMPq-NrHnUPnRtnhBWkEx5Hrt6YL9iArFm5lUS4RKGWiO1IqhtrNe1i2PPa8b7XPsCSgJC4uz_uqDXV-Ct30WyIt4DXvMxjOumCP9jvij3G6dscPPn6SAQPWtgi0Y-uO3hzokrncillEUarMqaZ4Q_b-wKtcN2gyOlPllg5NHTiYH5lmeQLJKjCdXHj8OiAUydyRwocujIGA8FQ" alt="Sowtek Product" />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-outline-variant/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">الاتصال الموحد</span>
              </div>
              <div className="space-y-4">
                <img alt="Sowtek Logo" className="h-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa8noqCeJ0FOxc8lGx-gzIYFr74vv9TFFLKnZWaVD94w4K_po2xVCOBJMetXR63IY2OGcZi4F4VwPs9G-TMYckkg4S1-_ATC8cINmszNukcE8Nc7Aj7KQ_wi97cC3yO_WuTF9lXBRh32uOx_74eG-DYxw3YcmOXkX3mSekMJMEBRK-KA4hGk1r8KcchZou2ZDYnNJFzwrq6bSZBPlfxI1STJjmLGbX6SNghWI6e0fmDSe0HZteSYoaaUjiKL4BhR4yXA7fzjHwtsM" />
                <h3 className="text-3xl font-black text-secondary leading-tight">صوتك - ثورة في عالم الاتصالات المؤسسية</h3>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                صوتك هو حل الاتصالات الصوتية الموحد الأقوى في المنطقة، مصمم لربط فرق العمل بكفاءة عالية عبر منصة سحابية واحدة آمنة وسهلة الإدارة.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-secondary font-bold">
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-full text-sm">check</span>
                  <span>جودة صوت استثنائية ونقاء فائق</span>
                </div>
                <div className="flex items-center gap-3 text-secondary font-bold">
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-full text-sm">check</span>
                  <span>إدارة مركزية عبر واجهة تحكم بديهية</span>
                </div>
              </div>
              <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                تعرف على المنتج
              </button>
            </div>
          </div>
        </div>

        {/* Product 3: Dara */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary-container/5 rounded-[3rem] -rotate-1 scale-105 opacity-50 blur-2xl"></div>
          <div className="relative bg-white border border-outline-variant/30 rounded-[3rem] p-8 lg:p-16 shadow-[0_30px_60px_-15px_rgba(13,45,103,0.08)] backdrop-blur-sm overflow-hidden grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-outline-variant/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">تحليل البيانات</span>
              </div>
              <div className="space-y-4">
                <div className="text-2xl font-black text-secondary flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-4xl">hub</span>
                  دارا - منصة التحليلات الوطنية
                </div>
                <h3 className="text-3xl font-black text-secondary leading-tight">حلول ذكاء الأعمال والتحليلات الضخمة</h3>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                منصة "دارا" تمنحك القدرة على تحويل البيانات الخام إلى رؤى استراتيجية تدعم اتخاذ القرار، مع لوحات بيانات تفاعلية وقدرات تنبؤية فائقة.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary">monitoring</span>
                  <span className="text-sm font-bold text-secondary">لوحات تحكم فورية</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary">psychology</span>
                  <span className="text-sm font-bold text-secondary">نماذج تنبؤ ذكية</span>
                </div>
              </div>
              <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                تعرف على المنتج
              </button>
            </div>
            <div className="lg:col-span-5 relative flex justify-center items-center h-[350px] lg:h-[450px]">
              <div className="absolute w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}