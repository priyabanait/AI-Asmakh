'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTranslation } from '../contexts/TranslationContext'
import { ChevronDown } from 'lucide-react' // 👈 clean dropdown icon

export default function Header() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null)
  const { language, switchLanguage, isTranslating } = useTranslation()

  const handleNavigation = (path) => {
    setMobileMenuOpen(false)
    setMobileOpenDropdown(null)
    router.push(path)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Dummy dropdowns
  const dropdowns = {
    HOME: [
      { label: 'Home', path: '/' },
      { label: 'Privilege Program', path: '/#privilege-program' },
      
    ],
    'ABOUT US': [
      { label: 'About Us', path: '/about-us' },
      { label: 'Sign In Member', path: '/sign-in-member' },
      { label: 'Sign Up Member', path: '/sign-up-member' },
      { label: 'Sign In Partner', path: '/sign-in-partner' },
      { label: 'Sign Up Partner2', path: '/sign-up-partner2' },
      // { label: 'Mission & Vision', path: '/about-us#mission-vision' },
      // { label: 'Team', path: '/about-us#team' },
    ],
    LISTINGS: [
      { label: 'Sale Map', path: '/listings/sale' },
      { label: 'Listing Sale', path: '/listings/listing-sale' },
      { label: 'Buy', path: '/listings/buy' },
      { label: 'Rent Map', path: '/listings/rent' },
      { label: 'Listing Rent', path: '/listings/listing-rent' },
      { label: 'Commercial', path: '/commercial' },
      { label: 'Blogs', path: '/listings/blogs' },
      
      { label: 'Luxury', path: '/listings/luxury' },
      { label: 'Services-lease', path: '/listings/services-lease' },
    ],
    SERVICES: [
      { label: 'Sales', path: '/services/services-sales' },
      { label: 'Property Management', path: '/services/propertyManagement' },
      { label: 'Marketing', path: '/services/marketing' },
      // { label: 'Valuation Services', path: '/services/valuation' },
      // { label: 'Real Estate Advisory', path: '/services/advisory' },
    ],
    DEVELOPMENT: [
      { label: 'All Projects', path: '/allprojects' },
      { label: 'Commercial', path: '/commercial' },
      { label: 'Industrial', path: '/industrial' },
      { label: 'Contact Head Office', path: '/contactheadoffice' },
    ],
    
  }

  return (
    <header
      style={{ height: '52px', minHeight: '52px' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border border-white/50 shadow-lg backdrop-blur-md bg-white/50 ${
        scrolled ? 'rounded-none' : 'rounded-[5px] mx-0 md:mx-2 mt-1 md:mt-4'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-0">
        <div className="flex items-center justify-between relative">
          {/* Mobile Logo */}
          <div className="flex md:hidden order-1 relative w-36 h-10">
            <Image src="/images/Al-asmakh.png" alt="Al-Asmakh Logo" fill className="object-contain" />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden order-2">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/20 transition-all duration-300"
              style={{ color: '#001730' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {!mobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Logo */}
          <div className="hidden md:flex flex-shrink-0 mr-2 md:mr-5 relative w-32 md:w-[180px] h-10 md:h-12 z-[100]">
            <Image src="/images/Al-asmakh.png" alt="Al-Asmakh Logo" fill className="object-contain" priority />
          </div>

          {/* Desktop Menu with dropdowns */}
          <nav className="hidden md:flex items-center gap-6 relative text-[#001730] text-sm font-medium">
            {['HOME', 'LISTINGS', 'SERVICES', 'DEVELOPMENT', 'ABOUT US', 'CONTACT'].map((item) => (
              <div
                key={item}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() =>
                    !dropdowns[item] && handleNavigation(`/${item.toLowerCase().replace(/\s+/g, '-') === 'home' ? '' : item.toLowerCase().replace(/\s+/g, '-')}`)
                  }
                  className="flex items-center gap-1 transition-all duration-200 hover:text-gray-700"
                >
                  {item}
                  {dropdowns[item] && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${activeDropdown === item ? 'rotate-180' : 'rotate-0'}`}
                    />
                  )}
                </button>

                {/* Dropdown menu */}
                {dropdowns[item] && (
                  <div
                    className={`absolute left-0 mt-2 min-w-[200px] rounded-lg border border-white/20 backdrop-blur-lg bg-white/40 shadow-xl transition-all duration-300 ease-in-out transform ${
                      activeDropdown === item
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-3 invisible'
                    }`}
                  >
                    <ul className="py-2">
                      {dropdowns[item].map((sub, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => handleNavigation(sub.path)}
                            className="block w-full text-left px-4 py-2 text-sm text-[#001730] hover:bg-white/60 transition-all duration-200"
                          >
                            {sub.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Backdrop */}
          {mobileMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 top-[52px]"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed top-[52px] left-0 right-0 bg-white/95 backdrop-blur-md border-t border-white/20 shadow-xl z-50 transition-all duration-300 ease-in-out overflow-hidden ${
              mobileMenuOpen
                ? 'max-h-screen opacity-100'
                : 'max-h-0 opacity-0 pointer-events-none'
            }`}
          >
            <nav className="flex flex-col p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-52px)]">
              {['HOME', 'LISTINGS', 'SERVICES', 'DEVELOPMENT', 'ABOUT US', 'CONTACT'].map((item) => (
                <div key={item}>
                  <button
                    onClick={() => {
                      if (!dropdowns[item]) {
                        const path = item === 'HOME' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`
                        handleNavigation(path)
                      } else {
                        setMobileOpenDropdown(mobileOpenDropdown === item ? null : item)
                      }
                    }}
                    className="flex items-center justify-between text-left px-4 py-3 text-sm font-medium text-[#001730] hover:bg-gray-100 rounded-md transition-all duration-200 w-full"
                  >
                    <span>{item}</span>
                    {dropdowns[item] && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          mobileOpenDropdown === item ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    )}
                  </button>
                  {/* Mobile Dropdown - Collapsible */}
                  {dropdowns[item] && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileOpenDropdown === item ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-6 space-y-1 pt-2">
                        {dropdowns[item].map((sub, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleNavigation(sub.path)}
                            className="text-left px-4 py-2 text-xs text-[#001730] hover:bg-gray-100 rounded-md transition-all duration-200 w-full"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <div
                  className={`flex items-center justify-center gap-1 whitespace-nowrap font-semibold rounded-lg px-4 py-2 ${
                    isTranslating ? 'opacity-50 pointer-events-none' : ''
                  }`}
                  style={{ fontSize: '14px', color: '#001730', letterSpacing: '0.1px' }}
                >
                  <button onClick={() => switchLanguage('en')} disabled={isTranslating}>
                    EN
                  </button>
                  <span className="mx-1 text-[#001730]">|</span>
                  <button onClick={() => switchLanguage('ar')} disabled={isTranslating} className={`${language === 'ar' ? 'font-semibold' : ''}`}>
                    AR
                  </button>
                  {isTranslating && (
                    <div className="ml-1">
                      <svg
                        className="animate-spin h-3 w-3 text-[#001730]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>

          {/* Right side - Language + Profile */}
          <div className="hidden md:flex items-center gap-4">
            <div
              className={`flex items-center gap-1 whitespace-nowrap font-semibold rounded-lg px-2 py-1 ${
                isTranslating ? 'opacity-50 pointer-events-none' : ''
              }`}
              style={{ fontSize: 'clamp(10px, 0.7vw, 14px)', color: '#001730', letterSpacing: '0.1px' }}
            >
              <button onClick={() => switchLanguage('en')} disabled={isTranslating}>
                EN
              </button>
              <span className="mx-1 text-[#001730]">|</span>
              <button onClick={() => switchLanguage('ar')} disabled={isTranslating} className={`${language === 'ar' ? 'font-semibold' : ''}`}>
                AR
              </button>
              {isTranslating && (
                <div className="ml-1">
                  <svg
                    className="animate-spin h-3 w-3 text-[#001730]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </div>
              )}
            </div>

            <button
              className="p-1 hover:bg-gray-300 transition-all duration-300 flex items-center justify-center"
              style={{
                color: '#001730',
                border: '0.2px solid #001730',
                borderRadius: '5px',
                width: '26px',
                height: '26px',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
