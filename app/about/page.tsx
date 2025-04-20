"use client"

import { motion } from "framer-motion"
import Layout from "@/components/layout"
import Image from "next/image"
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations"

export default function About() {
  return (
    <Layout>
      <motion.main
        className="about-content"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div className="about-text" variants={fadeIn}>
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" variants={slideUp}>
            About <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl font-light text-text-light"
            variants={slideUp}
            custom={1}
          >
            Formed in 2023, we provide the highest level of goods and service.
          </motion.p>
        </motion.div>

        <motion.div
          className="about-image"
          variants={fadeIn}
          custom={2}
          whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <Image
            src="/images/about-image.jpg"
            alt="Team working together"
            width={700}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div className="about-buttons" variants={fadeIn} custom={3}>
          <button className="btn outline-btn">Services</button>
          <button className="btn primary-btn">Portfolio</button>
        </motion.div>
      </motion.main>
    </Layout>
  )
}
