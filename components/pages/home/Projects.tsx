"use client";

import { useRef } from "react";

const projects = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABPgxJj8_qHRpwvpilTgIx4VDxQgXIGk7o8HN6mlx01QJnhUwAKYnevJtIs8BjMhf6e54ZT8DxxaDj-Ot-ldmYnt6hcfybLD8HUPU0etF-eIH9UK5rCp06URhA5iBbJXyg6pk3a98z3tLjfASFWlOf0kFOhlSPFzzYuHX-EYAfaOIP3fhdepydxK4C16LK-3V7RRGgHieWWU9ReayCLB43IArGdDqnGs8ew2FTzNm-6LPDcNi2W4BkthrDqo6kKj5wwD_3kQmqwxg",
    category: "القطاع المالي",
    title: "تأسيس مركز بيانات بنكي",
    description: "حلول بنية تحتية متكاملة",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6PUVoOaPLGOLRYTzCRLnP86sBXXSwEvoc4iXjbeW54UlTcBdVF8YsNHfaBeDq_sej_vYA9i7poYkIfwLkuN5c5u9HjG2srdYDLUHOLPkXlNhAEsD_iUOUDltSujv7Yr4xn1O6ik3_m6b1verQzigd7owzD2w6CaF11EublJXSqUpgCK39XRoeNNC_cwiD-6Y2aXb1GZRVgPTWRhUO8dDInDI4EovhDwbDOi766_ZFN2OpAfK8LoZCf_wgIDToqsys1nd7jowQ_qs",
    category: "الرعاية الصحية",
    title: "حلول الربط للقطاع الصحي",
    description: "ربط شبكات المستشفيات",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLVhzxPoDlrDOEEAKMhLcZQ75NaEm1FPI72ybHR9u90ToWP_wSf08AkKW96FleORq3AC5gKnNjM_2QeTRNAv2zoituV4xcoBXET3k4o7Vck6PMVAiTqrSEnV7WIvsUltBZ2aOCcvNoqRGY6NkPXDK3l-Bu5W4K5oISZvLvZRh5_laiLF7x6-jrv2g2SYT1Pgi_Co1P4TvwCHqKzNUlC1I-OG1ipfYyfeNEHyI7OF3Ak_X4gY7nCymy9CjvRP-IBHTxYtF0eA7hv-g",
    category: "القطاع الحكومي",
    title: "منصة الأمن السيبراني الوطنية",
    description: "حماية البيانات السيادية",
  },
  {
    category: "الحوسبة السحابية",
    title: "التحول الرقمي السحابي",
    description: "ترحيل البيانات بنجاح",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-surface px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="relative mb-12 text-center">
          <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full px-4 md:px-0 left-0">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-secondary/20 hover:bg-secondary hover:text-white transition-all text-secondary"
              aria-label="Scroll left"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-secondary/20 hover:bg-secondary hover:text-white transition-all text-secondary"
              aria-label="Scroll right"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          </div>
          <div className="space-y-4 pt-8 md:pt-0">
            <h2 className="text-4xl md:text-5xl font-black text-secondary">مشاريعنا الناجحة</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-medium">
              نستعرض معكم أبرز الإنجازات والحلول التقنية التي قدمناها لعملائنا في مختلف القطاعات بالمملكة.
            </p>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 no-scrollbar pb-8 snap-x snap-mandatory"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[400px] aspect-[4/5] relative rounded-[2.5rem] overflow-hidden snap-center group"
            >
              {project.image ? (
                <img
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.image}
                />
              ) : (
                <div className="absolute inset-0 animated-gradient" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-white/80 text-sm">{project.description}</p>
                    <span className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white group-hover:bg-primary-container group-hover:border-primary-container transition-all">
                      <span className="material-symbols-outlined text-sm -rotate-45">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}