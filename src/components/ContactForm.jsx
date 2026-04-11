import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import { itemFadeUp } from '../animation'

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log('Contact form submission:', form)
    track('contact_form_submit', {
      hasMessage: Boolean(form.message?.trim()),
    })
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <motion.label htmlFor="contact-name" variants={itemFadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
        <span>&gt; name:</span>
        <input id="contact-name" name="name" value={form.name} onChange={onChange} required />
      </motion.label>
      <motion.label htmlFor="contact-email" variants={itemFadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.05 }}>
        <span>&gt; email:</span>
        <input id="contact-email" name="email" type="email" value={form.email} onChange={onChange} required />
      </motion.label>
      <motion.label htmlFor="contact-message" variants={itemFadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.1 }}>
        <span>&gt; message:</span>
        <textarea id="contact-message" name="message" rows="4" value={form.message} onChange={onChange} required />
      </motion.label>
      <motion.button className="accent-button" type="submit" variants={itemFadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.15 }}>
        [ send_message() ]
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
            /* message sent successfully - I'll get back to you soon */
          </motion.p>
        ) : null}
      </AnimatePresence>
    </form>
  )
}

export default ContactForm
