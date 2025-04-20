"use client"

import type { ReactNode } from "react"
import Header from "./header"
import Footer from "./footer"
import { motion } from "framer-motion"
import { Toaster } from "react-hot-toast"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="main-wrapper">
      <Toaster position="top-center" />
      <div className="container">
        <Header />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {children}
        </motion.div>
        <Footer />
      </div>
    </div>
  )
}
