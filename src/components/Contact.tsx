'use client'
import { socials } from '@/constants'
import { useNavigation } from '@/global/navigation'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import axios from 'axios'

export function Contact() {
  const addNavigationStack = useNavigation((state) => state.pushActiveStack)
  const removeNavigationStack = useNavigation(
    (state) => state.removeFromActiveStack,
  )

  return (
    <motion.section
      onViewportLeave={() => removeNavigationStack('contact')}
      onViewportEnter={() => addNavigationStack('contact')}
      id="contact"
      className="container mb-32"
    >
      <motion.h2
        initial={{ y: 32 }}
        layout
        whileInView={{ y: 0, opacity: 1 }}
        // viewport={{ once: true, margin: '-150px 0px -150px 0px' }}
        className="opacity-0 mb-6"
      >
        Contact
      </motion.h2>
      <div className="flex gap-20 lg:gap-8 flex-col lg:flex-row">
        <div className="flex-1 flex flex-col">
          <p className="mb-6 max-w-md">
            Feel free to connect with me here or on LinkedIn. I&apos;m open to
            discussing web development opportunities and insights. Let&apos;s
            connect and explore together!
          </p>
          <div className="flex-1 flex items-center gap-7">
            {socials.map(({ href, icon: Icon, name }) => (
              <a
                aria-label={name}
                target="_blank"
                key={href}
                href={href}
                className="bg-primary-low-opacity rounded-full aspect-square p-4 flex justify-center items-center hover:brightness-125 transition-all duration-300"
              >
                <Icon width={38} height={38} />
              </a>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </motion.section>
  )
}

function ContactForm() {
  const { register, handleSubmit, formState } = useForm<{
    name: string
    email: string
    message: string
  }>({
    reValidateMode: 'onChange',
  })

  const enableSubmit = formState.isDirty && formState.isValid

  const onSubmit = handleSubmit(({ name, email, message }) => {
    toast.promise(
      axios.post('api/message', {
        name,
        email,
        message,
      }),
      {
        loading: 'Sending message...',
        success: 'Message sent!',
        error: 'Message failed to send.',
      },
    )
  })

  return (
    <form className="flex-1 flex flex-col gap-11" onSubmit={onSubmit}>
      <input {...register('name', { required: true })} placeholder="Name" />
      <input
        {...register('email', {
          required: true,
          pattern: /\S+@\S+\.\S+/,
        })}
        placeholder="Email"
      />
      <textarea {...register('message')} placeholder="Message" />
      <button
        disabled={!enableSubmit}
        type="submit"
        className="disabled:grayscale disabled:cursor-not-allowed bg-primary-low-opacity rounded-lg p-5 hover:brightness-125 transition-all duration-500"
      >
        Submit
      </button>
    </form>
  )
}
