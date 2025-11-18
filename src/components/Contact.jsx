import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ loading: false, ok: null, msg: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, ok: null, msg: '' })
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Fehler beim Senden')
      setForm({ name: '', email: '', subject: '', message: '' })
      setStatus({ loading: false, ok: true, msg: 'Nachricht erfolgreich gesendet. Ich melde mich zeitnah.' })
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: 'Etwas ist schiefgelaufen. Bitte später erneut versuchen.' })
    }
  }

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-50">Kontakt</h2>
        <p className="mt-2 text-zinc-400">Erzähl mir kurz von deinem Projekt – ich melde mich mit einem Vorschlag.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-2">Name</label>
              <input name="name" value={form.name} onChange={onChange} required className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500" placeholder="Dein Name" />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-2">E-Mail</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500" placeholder="mail@beispiel.de" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Betreff</label>
            <input name="subject" value={form.subject} onChange={onChange} className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500" placeholder="Worum geht es?" />
          </div>
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Nachricht</label>
            <textarea name="message" value={form.message} onChange={onChange} required rows="6" className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500" placeholder="Beschreibe kurz dein Vorhaben..." />
          </div>

          <div className="flex items-center gap-3">
            <button disabled={status.loading} className="px-6 py-3 rounded-full bg-amber-500 disabled:opacity-60 text-zinc-900 font-medium hover:bg-amber-400 transition-colors">Senden</button>
            {status.msg && (
              <span className={`text-sm ${status.ok ? 'text-emerald-400' : 'text-red-400'}`}>{status.msg}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
