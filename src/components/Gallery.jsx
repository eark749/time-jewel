export default function Gallery() {
  return (
    <section className="py-12 sm:py-20 md:py-32 lg:py-40 bg-[#F5F2ED]" id="portfolio">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="mb-12 sm:mb-16 md:mb-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl serif-header font-medium mb-4 sm:mb-6">Our Most Loved<br /><span className="italic font-light">Creations</span></h2>
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.6em] font-medium opacity-40">Hand-curated craftsmanship gallery</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-10">
          <div className="md:col-span-8 group overflow-hidden bg-white/50 p-2 sm:p-4">
            <img
              alt="Collection"
              className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[600px] object-cover rounded-tl-[50px] sm:rounded-tl-[100px] md:rounded-tl-[150px] transition-transform duration-1000 group-hover:scale-[1.02]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGy1yylEfCCzaH5LDPE9M56efIkYoG_diu0XOVf4a2bP-7O764KORbt02UCltuTF7snT-uOign9VYB2IbU2aT-yIPaEh-r4XsrNUPMbfDTSHPE4fBuLAooqYxh0ooEW_PnLpR56UYtbOzIMaNN_Z4iA0e6HTdJZ5lLsy6nqoh1P0wPbi4yZhm6XMKRtGPZzRIXOKfi28M2XL4YJx4q7ePqGvMSXvJniXraNOAKHcwoH-7yqDnD8kw7J2Xmgrdr42rxEyBK9MueLW4"
            />
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6 md:gap-10">
            <div className="bg-white/50 p-2 sm:p-4 rounded-tr-[50px] sm:rounded-tr-[100px] md:rounded-tr-[150px] overflow-hidden group">
              <img
                alt="Detail"
                className="w-full h-[180px] sm:h-[220px] object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf9bx8FM9R7lLSfyq1ZwulEW3Dbq93W1VDYwcWSUVOvMUOmSFWeGGPVIw-e2v1WrhlAeMnfcNBOmc8uBO40wRGT-E1P0OzmD471Q3Qo8k2QZ_RaxCtSfqCHUy-umPeFL4GV6ioDS9RnjpGzLPL8LLFIIGjD_IO52voe0i4UNmJoprM3yLJ8muRdHSUWjrpt_av130ZKpUyxiiPuGHWEh7CLLeFEn3VwqbvHKBEHE-HgyWe3LUTo7r8FPAvbIqcF-cDD-KU2nC0iXw"
              />
            </div>
            <div className="bg-white/50 p-2 sm:p-4 rounded-br-[50px] sm:rounded-br-[100px] md:rounded-br-[150px] overflow-hidden group">
              <img
                alt="Detail"
                className="w-full h-[180px] sm:h-[220px] object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRh9jfCBv8jM1kl2xYwcWnEbF_Dmy3VqqLXHfjM27gfysLnCzEb9NLNgFdlihycNg1HB4klWi3B58fePYDYVdgwiHdoJmTfM9tIbJO1Q2yfj0H8lBVVM5p3iDHhcmxfRW7tR33k6l1qRm0GRJVXFZc0P7ZHDJ9TVxMffepKA-948ZxUU4Ch71XL4cCcjqV-LGapWNro0s2U9ZMkM-CFTMbTIIPPwxG0Mj2W5RJm-3PLfQjKat-8XczV228ViBIF9HT5E9qkIyw6Dc"
              />
            </div>
          </div>
          <div className="md:col-span-12 relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden bg-white/50 p-2 sm:p-4 group">
            <img
              alt="Detail"
              className="w-full h-full object-cover rounded-bl-[50px] sm:rounded-bl-[100px] md:rounded-bl-[150px] opacity-90 group-hover:opacity-100 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5epAODSQ25KYrk6Rg27eApK-8HUj0nDOGflq2_5mEXxsMWY-kWqCKckd2wuQZ9zAV8z9GxlwoUuBTp36Whjdf4_W2zQ5lYxffhl_U-bZK5O22yY1OalKsQS6S2CUOy00c9JDZVZ2ZoZpt5w6hb1iR42SdGvC4fKlpXmuUDGFcYPVEL977WuYlLJsxPXpsl-wy9AG3E187IyaD5Lj7QDbjSKJQoOo3nxnUiJCCGUffhndvvj3YGW0ahICnt-WTdHv0uHzpZTRa75E"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display italic tracking-widest drop-shadow-lg">Eternal Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
