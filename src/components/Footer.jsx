import { useState } from 'react'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''
const CONTACT_PHONE = '+91 9428739861'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Gold Casting',
    vision: '',
  })
  const [status, setStatus] = useState('') // 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!FORMSPREE_ENDPOINT) {
      // Fallback: open SMS app with pre-filled message if Formspree not configured
      const body = encodeURIComponent(
        `Time Jewel Inquiry - ${formData.projectType}\n\nName: ${formData.name}\nPhone: ${formData.phone}\n\nMessage: ${formData.vision}`
      )
      const phoneForSms = CONTACT_PHONE.replace(/\s/g, '')
      window.location.href = `sms:${phoneForSms}?body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', phone: '', projectType: 'Gold Casting', vision: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <footer className="bg-[#E9E3D8] py-12 sm:py-20 md:py-32 lg:py-40" id="contact">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-24 lg:gap-32 items-start lg:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl serif-header font-medium mb-6 sm:mb-12">Join Our <br /><span className="italic font-light opacity-60 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Mailing List</span></h2>
            <p className="text-sm sm:text-base font-light text-primary/60 mb-10 sm:mb-16 md:mb-20 max-w-sm leading-relaxed">Stay updated with our latest manufacturing technology updates and seasonal casting schedules.</p>
            <div className="space-y-6 sm:space-y-8 md:space-y-10 mb-10 sm:mb-16 md:mb-20">
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-70 hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-lg sm:text-xl shrink-0">call</span>
                {CONTACT_PHONE}
              </a>
              <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-70">
                <span className="material-symbols-outlined text-lg sm:text-xl shrink-0">location_on</span>
                Time Jewel Manufacturing, Ahmedabad, Gujarat, India.
              </div>
            </div>
            <a
              className="inline-flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] pb-3 border-b border-primary/20 hover:border-primary transition-all group touch-manipulation"
              href={`https://wa.me/${CONTACT_PHONE.replace(/\D/g, '')}`}
            >
              Chat on WhatsApp <span className="material-symbols-outlined text-base sm:text-lg group-hover:rotate-45 transition-transform">arrow_outward</span>
            </a>
          </div>
          <div className="bg-[#F5F2ED] p-6 sm:p-10 md:p-12 lg:p-16 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-sm w-full">
            <form className="space-y-6 sm:space-y-8 md:space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                <div>
                  <label className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40 mb-2 sm:mb-3">Your Name</label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-primary/10 focus:border-primary focus:ring-0 focus:outline-none transition-all p-0 pb-4 placeholder:text-primary/20"
                    placeholder="Full Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40 mb-2 sm:mb-3">Phone Number</label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-primary/10 focus:border-primary focus:ring-0 focus:outline-none transition-all p-0 pb-4 placeholder:text-primary/20"
                    placeholder="+91 98765 43210"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40 mb-2 sm:mb-3">Project Type</label>
                <select
                  className="w-full bg-transparent border-0 border-b border-primary/10 focus:border-primary focus:ring-0 focus:outline-none transition-all p-0 pb-4 text-primary/60"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option>Gold Casting</option>
                  <option>CZ Jewelry</option>
                  <option>CAD Design</option>
                </select>
              </div>
              <div>
                <label className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/40 mb-2 sm:mb-3">Your Vision</label>
                <textarea
                  className="w-full bg-transparent border-0 border-b border-primary/10 focus:border-primary focus:ring-0 focus:outline-none transition-all p-0 pb-4 placeholder:text-primary/20"
                  placeholder="Describe your requirements..."
                  rows="3"
                  name="vision"
                  value={formData.vision}
                  onChange={handleChange}
                />
              </div>
              {status === 'success' && (
                <p className="text-sm text-primary/70 font-medium">Thank you! Your inquiry has been sent. We&apos;ll reach out soon.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-600/80">Something went wrong. Please call us at {CONTACT_PHONE}</p>
              )}
              <button
                className="w-full bg-primary text-white font-medium py-4 sm:py-5 md:py-6 rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.4em] sm:tracking-[0.5em] hover:bg-black transition-all touch-manipulation min-h-[44px] disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 sm:mt-20 md:mt-32 lg:mt-40 pt-8 sm:pt-12 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.3em] sm:tracking-[0.4em] opacity-40 text-center md:text-left">
          <p>© 2024 Time Jewel Manufacturing. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            <a className="hover:opacity-100 transition-opacity" href="#">Privacy Policy</a>
            <a className="hover:opacity-100 transition-opacity" href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
