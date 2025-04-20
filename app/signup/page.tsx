"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, type FormEvent } from "react"
import Layout from "@/components/layout"
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations"
import { toast } from "react-hot-toast"
import Link from "next/link"

type SignupFormData = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  agreeTerms: boolean
}

export default function Signup() {
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("Please fill in all required fields")
      return
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.email)) {
      toast.error("Please enter a valid email address")
      return
    }

    // Password validation
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long")
      return
    }

    // Confirm password
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    // Terms agreement
    if (!formData.agreeTerms) {
      toast.error("You must agree to the terms and conditions")
      return
    }

    // Success
    toast.success("Account created successfully!")
    // In a real app, you would handle registration here
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
            <span className="text-primary">Sign Up</span> for an Account
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl font-light text-text-light"
            variants={slideUp}
            custom={1}
          >
            Join our community and get started today!
          </motion.p>
        </motion.div>

        <motion.form className="contact-form" onSubmit={handleSubmit} variants={fadeIn} custom={2}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name*</label>
            <motion.input
              whileFocus={{ y: -3, boxShadow: "0 8px 20px rgba(124, 58, 237, 0.1)" }}
              transition={{ type: "tween", duration: 0.3 }}
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <motion.input
              whileFocus={{ y: -3, boxShadow: "0 8px 20px rgba(124, 58, 237, 0.1)" }}
              transition={{ type: "tween", duration: 0.3 }}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password*</label>
              <motion.input
                whileFocus={{ y: -3, boxShadow: "0 8px 20px rgba(124, 58, 237, 0.1)" }}
                transition={{ type: "tween", duration: 0.3 }}
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password*</label>
              <motion.input
                whileFocus={{ y: -3, boxShadow: "0 8px 20px rgba(124, 58, 237, 0.1)" }}
                transition={{ type: "tween", duration: 0.3 }}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="agreeTerms" className="text-sm">
              I agree to the{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <motion.button
            type="submit"
            className="btn secondary-btn submit-btn"
            whileHover={{ y: -3, boxShadow: "0 8px 20px rgba(249, 115, 22, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Create Account
          </motion.button>

          <div className="mt-4 text-center">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Login
              </Link>
            </p>
          </div>
        </motion.form>
      </motion.main>
    </Layout>
  )
}
