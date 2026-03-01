import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';
import { TerminalHeader } from './glitch-text';
import { TerminalCard } from './terminal-card';

const contactInfo = [
  {
    icon: Mail,
    label: 'email',
    value: 'vivek.23mei10045@vitbhopal.ac.in',
    href: 'mailto:vivek.23mei10045@vitbhopal.ac.in',
    cmd: '$ echo $EMAIL'
  },
  {
    icon: Phone,
    label: 'phone',
    value: '+91 93295 44611',
    href: 'tel:+919329544611',
    cmd: '$ echo $PHONE'
  },
  {
    icon: Linkedin,
    label: 'linkedin',
    value: '/vivek-sankath',
    href: 'https://www.linkedin.com/in/vivek-sankath/',
    cmd: '$ open linkedin'
  },
  {
    icon: Github,
    label: 'github',
    value: '@AnonymousGrey',
    href: 'https://github.com/AnonymousGrey',
    cmd: '$ git remote -v'
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="absolute top-0 left-0 right-0 neon-separator" />

      <div className="max-w-6xl mx-auto">
        <TerminalHeader command="ssh contact@vivek.dev" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info — whois style */}
          <TerminalCard title="~/contact/whois.txt" delay={0.1}>
            <div className="font-mono text-sm">
              <p className="text-gray-500 mb-4"># contact information</p>
              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-start gap-3 p-3 rounded bg-green-400/5 border border-green-400/10 hover:border-green-400/40 hover:bg-green-400/10 transition-all duration-300"
                  >
                    <info.icon className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] text-gray-600">{info.cmd}</p>
                      <p className="text-green-400 group-hover/link:text-cyan-400 transition-colors text-sm truncate">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </TerminalCard>

          {/* Contact Form — Terminal Input Style */}
          <TerminalCard title="~/contact/send_message.sh" delay={0.2}>
            <form onSubmit={handleSubmit} className="font-mono text-sm">
              <p className="text-gray-500 mb-4">#!/bin/bash — send a transmission</p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] text-gray-600 mb-1">
                    &gt; Enter your name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-black/60 border border-green-400/20 rounded text-green-400 text-sm font-mono focus:border-green-400/60 focus:outline-none focus:ring-1 focus:ring-green-400/30 transition-all duration-300 placeholder:text-gray-700"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] text-gray-600 mb-1">
                    &gt; Enter your email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-black/60 border border-green-400/20 rounded text-green-400 text-sm font-mono focus:border-green-400/60 focus:outline-none focus:ring-1 focus:ring-green-400/30 transition-all duration-300 placeholder:text-gray-700"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] text-gray-600 mb-1">
                    &gt; Enter your message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-black/60 border border-green-400/20 rounded text-green-400 text-sm font-mono focus:border-green-400/60 focus:outline-none focus:ring-1 focus:ring-green-400/30 transition-all duration-300 resize-none placeholder:text-gray-700"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted || loading}
                  className="w-full py-3 px-4 bg-green-400/10 border border-green-400/30 rounded text-green-400 font-bold font-mono text-sm flex items-center justify-center gap-2 hover:bg-green-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    <>✓ TRANSMISSION SENT</>
                  ) : loading ? (
                    <>⏳ SENDING...</>
                  ) : (
                    <>
                      [ENTER] Send Transmission
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {error && (
                  <div className="p-3 bg-red-400/10 border border-red-400/30 rounded text-red-400 text-xs font-mono">
                    ✗ {error}
                  </div>
                )}
              </div>
            </form>
          </TerminalCard>
        </div>
      </div>
    </section>
  );
}
