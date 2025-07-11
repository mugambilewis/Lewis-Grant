import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.subject,
      message: formData.message
    };

    emailjs
      .send('service_n9enh29', 'template_mr2b41g', templateParams, 'BnrvL-zPsyAd051K5')
      .then(() => {
        setStatus('sent');
        toast({
          title: 'Message Sent!',
          description: "Thank you for your message. I'll get back to you within 24 hours."
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
        toast({
          title: 'Error',
          description: 'Something went wrong. Please try again later.',
          variant: 'destructive'
        });
      })
      .finally(() => {
        setTimeout(() => setStatus('idle'), 3000);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'lewisgrant.tech@email.com',
      link: 'mailto:lewisgrant.tech@email.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available Worldwide',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In <span className="text-[#3366ff]">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to elevate your academic work? Let's discuss your project and how I can help you achieve excellence.
          </p>
          <div className="w-24 h-1 bg-[#3366ff] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Let's Start a Conversation
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#3366ff] rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-[#3366ff] transition-colors cursor-hover"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Response Time
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                I typically respond to all inquiries within 24 hours. For urgent projects, please mention it in your message for priority handling.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3366ff] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors cursor-hover"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3366ff] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors cursor-hover"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3366ff] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors cursor-hover"
                >
                  <option value="">Select a service</option>
                  <option value="academic-writing">Academic Writing</option>
                  <option value="research-support">Research Support</option>
                  <option value="technical-documentation">Technical Documentation</option>
                  <option value="proofreading">Proofreading & Editing</option>
                  <option value="report-writing">Report Writing</option>
                  <option value="design-services">Design Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3366ff] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors cursor-hover"
                  placeholder="Please describe your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full px-8 py-4 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-hover ${
                  status === 'sending'
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : status === 'sent'
                    ? 'bg-green-600 text-white'
                    : status === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-[#3366ff] hover:bg-[#2855cc] text-white'
                }`}
              >
                {status === 'sending' && <span className="animate-pulse">Sending...</span>}
                {status === 'sent' && 'Sent ✅'}
                {status === 'error' && 'Failed ❌'}
                {status === 'idle' && (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
