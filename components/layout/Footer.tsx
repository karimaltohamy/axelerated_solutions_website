import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#05142f] text-slate-300 pt-24 pb-12 w-full border-t border-white/5 font-['Cairo']">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <div className="text-3xl font-black text-white tracking-tight">الحلول المتسارعة</div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              شركة رائدة في تقديم الحلول التقنية المتكاملة بالمملكة العربية السعودية. نحن نلتزم بتمكين المؤسسات عبر بنية تحتية رقمية آمنة ومستدامة تدعم رؤية 2030. مكتبنا يقع في الرياض، المملكة العربية السعودية.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary transition-all cursor-pointer">
                <span className="material-symbols-outlined text-white" data-icon="groups">groups</span>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary transition-all cursor-pointer">
                <span className="material-symbols-outlined text-white" data-icon="hub">hub</span>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary transition-all cursor-pointer">
                <span className="material-symbols-outlined text-white" data-icon="public">public</span>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary transition-all cursor-pointer">
                <span className="material-symbols-outlined text-white" data-icon="alternate_email">alternate_email</span>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex flex-col items-center justify-center bg-white/5 p-1">
                <span className="text-[8px] font-bold text-white">GDPR</span>
                <div className="flex gap-0.5 mt-0.5">
                  <span className="w-0.5 h-0.5 bg-yellow-400 rounded-full"></span>
                  <span className="w-0.5 h-0.5 bg-yellow-400 rounded-full"></span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex flex-col items-center justify-center bg-white/5 p-1">
                <span className="material-symbols-outlined text-white text-lg" data-icon="verified_user">verified_user</span>
                <span className="text-[6px] text-white">ISO 27001</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-lg">المنتجات</h4>
            <ul className="space-y-4 text-sm">
              <li><Link className="hover:text-primary-container transition-colors" href="#">لينسك (Lensec)</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" href="#">صوتك (Sowtek)</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" href="#">التحليلات الذكية</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" href="#">بوابات العبور</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-lg">الخدمات</h4>
            <ul className="space-y-4 text-sm">
              <li><Link className="hover:text-primary-container transition-colors" href="#">البنية التحتية</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" href="#">الأمن السيبراني</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" href="#">الحوسبة السحابية</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" href="#">الخدمات المُدارة</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-lg">روابط سريعة</h4>
            <ul className="space-y-4 text-sm">
              <li><Link className="hover:text-primary-container transition-colors" href="#">من نحن</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" href="#">المشاريع الناجحة</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" href="#">آخر الأخبار</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" href="#">الامتثال والشفافية</Link></li>
              <li><Link className="hover:text-primary-container transition-colors" href="#">تواصل معنا</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            <p>© 2026 الحلول المتسارعة - جميع الحقوق محفوظة</p>
            <div className="flex gap-6">
              <Link className="hover:text-white transition-colors" href="#">سياسة الخصوصية</Link>
              <Link className="hover:text-white transition-colors" href="#">شروط الاستخدام</Link>
              <Link className="hover:text-white transition-colors" href="#">ملفات تعريف الارتباط</Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-600">مزود من قِبل</span>
            <span className="text-white font-bold text-sm tracking-tight flex items-center gap-1">
              AXS TECH <span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}