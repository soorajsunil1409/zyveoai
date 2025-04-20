"use client"

import { motion } from "framer-motion"
import { Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="copyright">© 2024. All Rights Reserved.</div>
        <div className="social-icons">
          <motion.a
            href="#"
            className="social-icon"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Facebook size={18} />
          </motion.a>
          <motion.a
            href="#"
            className="social-icon"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Linkedin size={18} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  )
}
