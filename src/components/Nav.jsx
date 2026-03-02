export default function Nav() {
  return (
    <nav className="fixed w-full z-50 bg-[#F5F2ED]/90 backdrop-blur-md border-b border-primary/5 safe-area-inset-top">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <a href="#" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase">Time Jewel</a>
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <a className="text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.4em] font-medium uppercase opacity-60 hover:opacity-100 transition-opacity" href="#charts">Standards</a>
            <a className="text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.4em] font-medium uppercase opacity-60 hover:opacity-100 transition-opacity" href="#portfolio">Gallery</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
