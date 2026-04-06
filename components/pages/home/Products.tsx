import Image from "next/image";
import { Features } from "@/components/ui/features-8";

export default function Products() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto space-y-32">
        {/* <Features /> */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-6">
            <Image alt="Lensec Logo" className="h-12 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDplLVkVUcjMTRHJM7C9u7_6aSxD3BOTNZmex62gjbJ-fKX6iq9SPuWcFkg5KoGOYUE5GBgGzKvLBb6068RZvMo4cf28lzittKbKfyPCYdyZfbY9gsWcjqvlsT0sT5gXeh-xNy8i0jO92oqDtlmNe6n6Nqm8bPuxhabnb1ZreNJnX6Pd7SWCR51uLcrkiCJkrdeYCMOSw1PGqf7Xi5_nXS5u7pNP8hSOWqy6b_328aQxWmr-GCt5bxhKjwqq0vsztqIQ1oKkvsO2IM" width={120} height={48} />
            <h2 className="text-3xl font-black text-secondary">لينسك - حلول المراقبة الذكية</h2>
            <p className="text-on-surface-variant leading-relaxed">نظام Lensec لإدارة الفيديو يوفر حلول مراقبة أمنية ذكية ومتكاملة للمنشآت الكبرى مع تحليلات متقدمة.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span> تحليل ذكي للبيانات</li>
              <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span> تكامل مع أنظمة الأمان</li>
            </ul>
            <button className="kinetic-pill px-8 py-3 bg-secondary text-white rounded-full font-bold">اكتشف لينسك</button>
          </div>
          <div className="flex-1 w-full h-[400px] bg-surface-container rounded-2xl overflow-hidden relative shadow-xl">
            <Image alt="Security control room" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKgV4g1F64v_u9LcCy_iAz2uljuG8CHGZFs_DRRaYGfSWTwwrzjgywnyXWbmi4uzTs2FexnNulhwjMG0oltHf7NTDnQUFPDF9lWApmtZgrfmWS2Qr7bmRnvNPVh-eIL1Uqvfyq6IdKalrHI5yeG30YQAegh7p5mFG3Qx7jUVxKfOBSeOoFTWxQ90AUCRZyMFHy0XbiGh6hhDnHh4tPMl7d9xE1JS0GVlzXCL1MRvJYG22KIgsl5v7ajozNV1pqnsDIuqyUn6l6vRE" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <Image alt="Sowtek Logo" className="h-12 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa8noqCeJ0FOxc8lGx-gzIYFr74vv9TFFLKnZWaVD94w4K_po2xVCOBJMetXR63IY2OGcZi4F4VwPs9G-TMYckkg4S1-_ATC8cINmszNukcE8Nc7Aj7KQ_wi97cC3yO_WuTF9lXBRh32uOx_74eG-DYxw3YcmOXkX3mSekMJMEBRK-KA4hGk1r8KcchZou2ZDYnNJFzwrq6bSZBPlfxI1STJjmLGbX6SNghWI6e0fmDSe0HZteSYoaaUjiKL4BhR4yXA7fzjHwtsM" width={120} height={48} />
            <h2 className="text-3xl font-black text-secondary">صوتك</h2>
            <p className="text-on-surface-variant leading-relaxed">حلول التواصل الصوتي الموحد الأكثر كفاءة للشركات، لربط المكاتب والموظفين تحت مظلة واحدة.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span> جودة صوت عالية</li>
              <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span> إدارة سهلة عبر السحابة</li>
            </ul>
            <button className="kinetic-pill px-8 py-3 bg-secondary text-white rounded-full font-bold">اكتشف صوتك</button>
          </div>
          <div className="flex-1 w-full h-[400px] bg-surface-container-high rounded-2xl overflow-hidden relative shadow-xl">
            <Image alt="Business team using tech" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpVmL-ViJBYPk17H_vX_c-ygyvfkR9iO24WTH4whP7iKm8q2KRIDl2tby35kT1FMPq-NrHnUPnRtnhBWkEx5Hrt6YL9iArFm5lUS4RKGWiO1IqhtrNe1i2PPa8b7XPsCSgJC4uz_uqDXV-Ct30WyIt4DXvMxjOumCP9jvij3G6dscPPn6SAQPWtgi0Y-uO3hzokrncillEUarMqaZ4Q_b-wKtcN2gyOlPllg5NHTiYH5lmeQLJKjCdXHj8OiAUydyRwocujIGA8FQ" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
}