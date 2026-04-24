import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import { itemFadeUp } from '../animation'

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT
const MIN_MESSAGE_LENGTH = 20

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const onChange = (event) => {
    const { name, value } = event.target
    if (sent) {
      setSent(false)
    }
    if (error) {
      setError('')
    }
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const trimmedMessage = form.message.trim()
    if (trimmedMessage.length < MIN_MESSAGE_LENGTH) {
      setError(`message should be at least ${MIN_MESSAGE_LENGTH} characters`)
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      if (CONTACT_ENDPOINT) {
        const response = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            message: trimmedMessage,
            source: 'portfolio',
          }),
        })

        if (!response.ok) {
          throw new Error('submit_failed')
        }
      } else {
        // Keep the form functional without a backend while preserving analytics.
        await new Promise((resolve) => {
          window.setTimeout(resolve, 450)
        })
      }

      track('contact_form_submit', {
        hasMessage: true,
        hasEndpoint: Boolean(CONTACT_ENDPOINT),
      })
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch {
      track('contact_form_submit_failed', {
        hasEndpoint: Boolean(CONTACT_ENDPOINT),
      })
      setError('unable to send right now. please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const remainingMessageChars = Math.max(MIN_MESSAGE_LENGTH - form.message.trim().length, 0)

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <motion.label htmlFor="contact-name" variants={itemFadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
        <span>&gt; name:</span>
        <input id="contact-name" name="name" value={form.name} onChange={onChange} autoComplete="name" required />
      </motion.label>
      <motion.label htmlFor="contact-email" variants={itemFadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.05 }}>
        <span>&gt; email:</span>
        <input id="contact-email" name="email" type="email" value={form.email} onChange={onChange} autoComplete="email" required />
      </motion.label>
      <motion.label htmlFor="contact-message" variants={itemFadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.1 }}>
        <span>&gt; message:</span>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          minLength={MIN_MESSAGE_LENGTH}
          value={form.message}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby="contact-message-help"
          required
        />
      </motion.label>
      <p id="contact-message-help" className="contact-form-help" role="status" aria-live="polite">
        {remainingMessageChars > 0 ? `add ${remainingMessageChars} more characters` : 'ready to send'}
      </p>
      <motion.button
        className="accent-button"
        type="submit"
        disabled={isSubmitting}
        variants={itemFadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.15 }}
      >
        {isSubmitting ? '[ sending_message() ]' : '[ send_message() ]'}
      </motion.button>
      <AnimatePresence>
        {sent ? (
          <motion.p
            className="success-line"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {CONTACT_ENDPOINT
              ? '/* message sent successfully - I will get back to you soon */'
              : '/* demo mode: connect VITE_CONTACT_ENDPOINT to receive messages */'}
          </motion.p>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {error ? (
          <motion.p
            className="error-line"
            role="alert"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            /* {error} */
          </motion.p>
        ) : null}
      </AnimatePresence>
    </form>
  )
}

export default ContactForm
