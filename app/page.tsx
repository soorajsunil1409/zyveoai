"use client"

import { motion } from "framer-motion"
import Layout from "@/components/layout"
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations"

export default function Home() {
  return (
    <Layout>
      <motion.main
        className="home-content"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="hero-text">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            variants={slideUp}
          >
            Cheap. Fast. <span className="text-primary">Better.</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-text-light mb-6"
            variants={slideUp}
            custom={1}
          >
            Let&apos;s build something great together.
          </motion.p>
          <motion.div variants={fadeIn} custom={2} className="flex flex-wrap gap-4">
            <a href="/contact" className="btn primary-btn">
              Contact Us
            </a>
            <a href="/signup" className="btn secondary-btn">
              Get Started
            </a>
          </motion.div>
        </div>
      </motion.main>
    </Layout>
  )
}
