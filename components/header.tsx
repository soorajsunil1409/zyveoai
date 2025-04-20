"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const controls = useAnimation()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1,
      },
    })
  }, [controls])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Prevent scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = "auto"
  }

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ]

  return (
    <motion.header
      className={`flex justify-between items-center relative z-10 ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -50, opacity: 0 }}
      animate={controls}
    >
      <Link href="/" className="logo">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex items-center"
        >
          <Image src="images/logo.png/ " alt="Zyveo AI Logo" width={40} height={40} className="mr-2" />
          <span className="text-xl font-bold tracking-tight">Zyveo AI</span>
        </motion.div>
      </Link>

      <div className="flex items-center">
        <button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`overlay ${mobileMenuOpen ? "active" : ""}`} onClick={closeMobileMenu}></div>

        <nav className={`flex items-center ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.path} className="mx-1 md:mx-2">
                <Link
                  href={link.path}
                  className={`nav-link ${pathname === link.path ? "active" : ""}`}
                  onClick={closeMobileMenu}
                >
                  <motion.span whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    {link.label}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="auth-buttons">
            <Link href="/login" onClick={closeMobileMenu}>
              <motion.button
                className="btn login-btn"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Login
              </motion.button>
            </Link>
            <Link href="/signup" onClick={closeMobileMenu}>
              <motion.button
                className="btn signup-btn"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Sign Up
              </motion.button>
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
