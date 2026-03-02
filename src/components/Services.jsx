const services = [
  {
    num: '01',
    title: 'CAD/CAM Design',
    desc: 'Absolute accuracy through digital modeling and high-resolution 3D printing technologies.',
  },
  {
    num: '02',
    title: 'Vacuum Casting',
    desc: 'Industry-leading density and zero-porosity finishes using state-of-the-art German technology.',
  },
  {
    num: '03',
    title: 'Hand Finishing',
    desc: 'Master artisans ensuring every detail reaches a high-luster mirror shine and flawless surface.',
  },
  {
    num: '04',
    title: 'Quality Assurance',
    desc: 'Strict purity checks and microscopic stone inspection for every batch to ensure lasting quality.',
  },
]

export default function Services() {
  return (
    <section className="py-12 sm:py-20 md:py-32 lg:py-40 bg-[#F5F2ED]" id="services">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl serif-header font-medium leading-tight mb-6 sm:mb-10">About <br /> Excellence</h2>
            <p className="text-xs sm:text-sm leading-relaxed text-primary/60 font-light max-w-md">
              At Time Jewel, we believe that manufacturing is more than just a service—it's a commitment to your brand's legacy. Each piece is crafted with exceptional precision and sophistication using heritage techniques blended with modern innovation.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-12 sm:gap-y-16 md:gap-y-20">
            {services.map((s) => (
              <div key={s.num} className="space-y-4 sm:space-y-6">
                <span className="text-3xl sm:text-4xl font-display italic opacity-30">{s.num}</span>
                <h3 className="text-xs sm:text-sm font-display font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] border-b border-primary/10 pb-3 sm:pb-4">{s.title}</h3>
                <p className="text-[12px] sm:text-[13px] text-primary/60 leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
