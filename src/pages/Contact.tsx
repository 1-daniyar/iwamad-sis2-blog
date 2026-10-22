import { useState, type FormEvent } from 'react'

export function Contact() {
  const [sent, setSent] = useState<boolean>(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section>
      <h1>Contact</h1>
      <p className="lead">Questions about the blog, the store or student entrepreneurship? Write to me.</p>

      {sent ? (
        <p className="notice" role="status">
          Thank you! Your message was noted (this demo form does not send anything yet).
        </p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Your name
            <input type="text" name="name" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit" className="button">
            Send message
          </button>
        </form>
      )}
    </section>
  )
}
