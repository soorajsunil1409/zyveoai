"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, type FormEvent } from "react"
import Layout from "@/components/layout"
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations"
import { toast } from "react-hot-toast"

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields")
      return
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.email)) {
      toast.error("Please enter a valid email address")
      return
    }

    // Phone validation
    const phonePattern = /^\d+$/
    if (!phonePattern.test(formData.phone.replace(/[\s-]/g, ""))) {
      toast.error("Please enter a valid phone number")
      return
    }

    // Success
    toast.success("Form submitted successfully!")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <Layout>
      <motion.main
        className="contact-content"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div className="contact-info" variants={fadeIn}>
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" variants={slideUp}>
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl font-light text-text-light"
            variants={slideUp}
            custom={1}
          >
            Email: business@email.com | Phone: 123-4567
          </motion.p>
        </motion.div>

        <motion.form id="contactForm" className="contact-form" onSubmit={handleSubmit} variants={fadeIn} custom={2}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First name*</label>
              <motion.input
                whileFocus={{ y: -3, boxShadow: "0 8px 20px rgba(37, 99, 235, 0.1)" }}
                transition={{ type: "tween", duration: 0.3 }}
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name*</label>
              <motion.input
                whileFocus={{ y: -3, boxShadow: "0 8px 20px rgba(37, 99, 235, 0.1)" }}
                transition={{ type: "tween", duration: 0.3 }}
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email address*</label>
              <motion.input
                whileFocus={{ y: -3, boxShadow: "0 8px 20px rgba(37, 99, 235, 0.1)" }}
                transition={{ type: "tween", duration: 0.3 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone number*</label>
              <motion.input
                whileFocus={{ y: -3, boxShadow: "0 8px 20px rgba(37, 99, 235, 0.1)" }}
                transition={{ type: "tween", duration: 0.3 }}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <motion.textarea
              whileFocus={{ y: -3, boxShadow: "0 8px 20px rgba(37, 99, 235, 0.1)" }}
              transition={{ type: "tween", duration: 0.3 }}
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="btn primary-btn submit-btn"
            whileHover={{ y: -3, boxShadow: "0 8px 20px rgba(37, 99, 235, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Send
          </motion.button>
        </motion.form>
      </motion.main>
    </Layout>
  )
}
