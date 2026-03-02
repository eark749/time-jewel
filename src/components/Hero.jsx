export default function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center pt-14 sm:pt-16 md:pt-20 overflow-hidden">
      <div className="absolute right-0 top-0 w-[55%] h-full pt-32 pb-16 px-16 hidden lg:block">
        <div className="w-full h-full relative">
          <img
            alt="Luxury Jewelry Detail"
            className="w-full h-full object-cover object-center rounded-tl-[300px] rounded-br-[100px] shadow-2xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBwhF35zdrMiuNn7d_X1Gmn5fczDrQSO_jHikDWp2LDmXAHx1PrD4k4BDD1YVf7cHZnSezUN5s64uNL8yS5-qEXu6SlTqcTfA6Gyjn8kPDLJpdNfKD_XNAacywvrzQNJUCrJ0feQmp4f1-rQPMLaXywS6vbvZ-PC5h-aSk5qGtealyaBe83_gCpEzMjSR_XXXopRa13t8VEvxKHs2VvH--OUjHGDvt9mpWx-4j93nAOafJeWwPZZ9ZKQWZ3PGs2u3Pas7avKKsyuQ"
          />
        </div>
      </div>
      <div className="absolute inset-0 lg:hidden">
        <img
          alt="Luxury Jewelry Detail"
          className="w-full h-full object-cover object-center opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBwhF35zdrMiuNn7d_X1Gmn5fczDrQSO_jHikDWp2LDmXAHx1PrD4k4BDD1YVf7cHZnSezUN5s64uNL8yS5-qEXu6SlTqcTfA6Gyjn8kPDLJpdNfKD_XNAacywvrzQNJUCrJ0feQmp4f1-rQPMLaXywS6vbvZ-PC5h-aSk5qGtealyaBe83_gCpEzMjSR_XXXopRa13t8VEvxKHs2VvH--OUjHGDvt9mpWx-4j93nAOafJeWwPZZ9ZKQWZ3PGs2u3Pas7avKKsyuQ"
        />
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 w-full">
        <div className="max-w-3xl">
          <span className="text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.6em] font-medium uppercase mb-4 sm:mb-8 block opacity-40">Est. 2009 • Bespoke Manufacturing</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[110px] serif-header font-medium leading-[0.9] sm:leading-[0.85] mb-6 sm:mb-12">
            Precision <br /> Casting. <br /><span className="italic font-light">Flawless <br /> Finish.</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-primary/60 mb-8 sm:mb-12 leading-relaxed max-w-sm font-light">
            Elevating the art of jewelry production through advanced vacuum pressure casting and meticulous artisan finishing for the world's finest boutiques.
          </p>
          <div className="flex items-center">
            <a
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-primary text-white text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.3em] sm:tracking-[0.4em] rounded-full hover:bg-black transition-all flex items-center gap-4 sm:gap-6 group touch-manipulation"
              href="#contact"
            >
              Start Your Project
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">trending_flat</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
