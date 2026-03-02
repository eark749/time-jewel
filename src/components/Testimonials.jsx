const testimonials = [
  {
    quote: "Consistency in gold casting is unparalleled. We've seen significant reduction in finishing time.",
    name: "Priya Sharma",
    role: "Creative Director, Luxe Gold",
  },
  {
    quote: "Transparent wastage terms and precise execution. They are truly partners in our manufacturing.",
    name: "Rajesh Kumar",
    role: "Founder, Kumar & Co Jewels",
  },
  {
    quote: "Excellent handle on CZ casting. The detail even on smaller pieces is remarkable for volume.",
    name: "Kavita Desai",
    role: "Manager, Aurum Collective",
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-20 md:py-28 lg:py-32 bg-[#E9E3D8]/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 md:gap-20">
          {testimonials.map((t) => (
            <div key={t.name} className="space-y-4 sm:space-y-6 md:space-y-8 border-l border-primary/10 pl-6 sm:pl-8 md:pl-10">
              <p className="text-lg sm:text-xl md:text-2xl font-display italic text-primary/70 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">{t.name}</p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] opacity-40">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
