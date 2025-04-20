"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, type FormEvent } from "react"
import Layout from "@/components/layout"
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations"
import { toast } from "react-hot-toast"
import Link from "next/link"

type LoginFormData = {
  email: string
  password: string
  rememberMe: boolean
}

export default function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
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
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all required fields")
      return
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.email)) {
      toast.error("Please enter a valid email address")
      return
    }

    // Success
    toast.success("Login successful!")
    // In a real app, you would handle authentication here
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
            <span className="text-primary">Login</span> to Your Account
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl font-light text-text-light"
            variants={slideUp}
            custom={1}
          >
            Welcome back! Please enter your credentials to continue.
          </motion.p>
        </motion.div>

        <motion.form className="contact-form" onSubmit={handleSubmit} variants={fadeIn} custom={2}>
          <div className="form-group">
            <label htmlFor="email">Email address*</label>
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

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-sm">
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </div>

          <motion.button
            type="submit"
            className="btn primary-btn submit-btn"
            whileHover={{ y: -3, boxShadow: "0 8px 20px rgba(124, 58, 237, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Login
          </motion.button>

          <div className="mt-4 text-center">
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </motion.form>
      </motion.main>
    </Layout>
  )
}
