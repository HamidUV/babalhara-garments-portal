
import React, { useState, useRef } from 'react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration with the provided credentials
      const serviceId = 'service_kuonb18';
      const templateId = 'template_qjbdxzp';
      const publicKey = '1mqDYPzSdF4hKGmK9';
      
      // The recipient email is pre-configured in your EmailJS template
      // or in the EmailJS email service settings (eatechistory.hamid@gmail.com)
      
      // Send the email using EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current!,
        publicKey
      );
      
      console.log('Email sent successfully:', result.text);
      toast.success('Your message has been sent successfully!');
      
      // Reset the form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent shadow-sm"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent shadow-sm"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent shadow-sm"
          placeholder="Your message here..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center shadow-md hover:shadow-lg transition-all"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};

export default ContactForm;
