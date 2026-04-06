import Link from "next/link";

export default function Services() {
  return (
    <section className="py-24 bg-surface-container-low px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1 bg-secondary/5 text-secondary rounded-full font-bold text-sm">خدماتنا</span>
          <h2 className="text-3xl md:text-4xl font-black text-secondary">حلول تقنية متكاملة لعملك</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface-container-lowest p-8 rounded-xl vision-shadow bento-card border-r-4 border-primary">
            <div className="w-14 h-14 rounded-full bg-[#57C5E0]/10 flex items-center justify-center mb-6 text-[#57C5E0]">
              <span className="material-symbols-outlined" data-icon="dns">dns</span>
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">البنية التحتية</h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">تصميم وبناء مراكز البيانات المتطورة وشبكات الأعمال عالية الأداء.</p>
            <Link className="text-primary font-bold text-sm inline-flex items-center gap-2 hover:gap-4 transition-all" href="#">
              اقرأ المزيد <span className="material-symbols-outlined text-xs" data-icon="arrow_back">arrow_back</span>
            </Link>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl vision-shadow bento-card">
            <div className="w-14 h-14 rounded-full bg-[#57C5E0]/10 flex items-center justify-center mb-6 text-[#57C5E0]">
              <span className="material-symbols-outlined" data-icon="cloud">cloud</span>
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">الحوسبة السحابية</h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">حلول سحابية هجينة ومرنة تتناسب مع احتياجات نمو مؤسستك.</p>
            <Link className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">اقرأ المزيد</Link>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl vision-shadow bento-card">
            <div className="w-14 h-14 rounded-full bg-[#57C5E0]/10 flex items-center justify-center mb-6 text-[#57C5E0]">
              <span className="material-symbols-outlined" data-icon="support_agent">support_agent</span>
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">الخدمات المُدارة</h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">دعم فني ومراقبة على مدار الساعة لضمان استمرارية الأعمال.</p>
            <Link className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">اقرأ المزيد</Link>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl vision-shadow bento-card">
            <div className="w-14 h-14 rounded-full bg-[#57C5E0]/10 flex items-center justify-center mb-6 text-[#57C5E0]">
              <span className="material-symbols-outlined" data-icon="security">security</span>
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">الأمن السيبراني</h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">حماية شاملة ضد التهديدات الرقمية وتأمين بياناتك الحساسة.</p>
            <Link className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">اقرأ المزيد</Link>
          </div>
        </div>
      </div>
    </section>
  );
}