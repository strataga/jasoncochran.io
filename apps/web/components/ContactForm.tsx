'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      {submitStatus === 'success' && (
        <div className="mb-6 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-600 rounded-xl">
          <h3 className="font-bold text-green-900 dark:text-green-100 mb-2">
            Thank you for reaching out!
          </h3>
          <p className="text-green-800 dark:text-green-200">
            I'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-500 dark:border-red-600 rounded-xl">
          <h3 className="font-bold text-red-900 dark:text-red-100 mb-2">
            Something went wrong
          </h3>
          <p className="text-red-800 dark:text-red-200 mb-3">
            Please try again or email me directly at:
          </p>
          <a
            href="mailto:jason.cochran@strataga.io"
            className="text-red-900 dark:text-red-100 font-semibold underline"
          >
            jason.cochran@strataga.io
          </a>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
            Name *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
              maxLength: { value: 100, message: 'Name must be less than 100 characters' },
              pattern: {
                value: /^[a-zA-Z\s'-]+$/,
                message: 'Name can only contain letters, spaces, hyphens, and apostrophes',
              },
            })}
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address',
              },
            })}
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' },
              maxLength: { value: 2000, message: 'Message must be less than 2000 characters' },
            })}
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none"
            placeholder="Tell me about your project or opportunity..."
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
