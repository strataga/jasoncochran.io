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

  const inputClasses =
    'w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none'

  const labelClasses = 'block text-sm font-semibold text-foreground mb-2'

  return (
    <div className="w-full">
      {submitStatus === 'success' && (
        <div className="mb-6 p-5 rounded-md bg-green-50 border border-green-200">
          <h3 className="font-semibold text-green-900 mb-1">Thanks for reaching out.</h3>
          <p className="text-sm text-green-900/80">I&apos;ll reply within 24 hours.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-5 rounded-md bg-red-50 border border-red-200">
          <h3 className="font-semibold text-red-900 mb-1">Something went wrong.</h3>
          <p className="text-sm text-red-900/80">Please try again in a moment.</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
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
            className={inputClasses}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
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
            className={inputClasses}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' },
              maxLength: { value: 2000, message: 'Message must be less than 2000 characters' },
            })}
            className={`${inputClasses} resize-none`}
            placeholder="Which offering above sounds like you, and what's the context?"
          />
          {errors.message && (
            <p className="mt-2 text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </div>
  )
}
