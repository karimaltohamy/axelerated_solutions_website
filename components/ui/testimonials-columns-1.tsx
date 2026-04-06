"use client";
import React from "react";
import { motion } from "framer-motion";


export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          y: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border border-gray-300 shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div className="text-right">{text}</div>
                  <div className="flex items-center gap-2 mt-5 justify-end">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>

                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const testimonials = [
  {
    text: "هذا النظام أحدث ثورة في عملياتنا، streamlining المالية والمخزون. والمنصة السحابية تبقي منتجينا، حتى عن بُعد.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    name: "بريانا باتون",
    role: "مدير العمليات",
  },
  {
    text: "تنفيذ هذا النظام كان سلسًا وسريعًا. الواجهة سهلة الاستخدام والقابلة للتخصيص جعلت تدريب الفريق سهلاً.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    name: "بلال أحمد",
    role: "مدير تقنية المعلومات",
  },
  {
    text: "فريق الدعم استثنائي، يقودنا خلال الإعداد ويقدم المساعدة المستمرة، مما يضمن رضانا.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    name: "سمن ملك",
    role: "رئيس دعم العملاء",
  },
  {
    text: "تكامل هذا النظام السلس عزز عمليات وكفاءة أعمالنا. نوصي به بشدة لواجهة بديهية.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc4aac51a?w=100&h=100&fit=crop",
    name: "عمر رضا",
    role: "الرئيس التنفيذي",
  },
  {
    text: "ميزاته القوية ودعمه السريع حول سير عملنا، مما جعلنا أكثر كفاءة بشكل ملحوظ.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    name: "زينب حسنين",
    role: "مدير المشاريع",
  },
  {
    text: "التنفيذ السلس فاق التوقعات. Streamlined العمليات، مما يحسن أداء الأعمال بشكل عام.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    name: "عليزا خان",
    role: "محلل أعمال",
  },
  {
    text: "تحسنت وظائف أعمالنا بتصميم سهل الاستخدام وملاحظات العملاء الإيجابية.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    name: "فرحات صدّيقي",
    role: "المدير التسويقي",
  },
  {
    text: "قدموا حلاً تجاوز التوقعات، فهم احتياجاتنا وعزز عملياتنا.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    name: "صنى شيخ",
    role: "مدير المبيعات",
  },
  {
    text: "باستخدام هذا النظام، تحسن تواجدنا عبر الإنترنت والتحويلات بشكل كبير، مما عزز أداء الأعمال.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    name: "حسن علي",
    role: "مدير التجارة الإلكترونية",
  },
];