'use client';

import { Button, Card, CardBody } from '@heroui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-[#0087d3] to-blue-600 bg-clip-text text-transparent">
              Contact
            </span>{' '}
            Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for a free consultation and quote. We're here
            to help you go solar!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in <span className="text-[#0087d3]">Touch</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our solar products? Want a custom quote?
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <Card className="border-2 border-gray-100 hover:border-[#40a8e0] transition-all">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">📧</span>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">
                          mayurasolar.sys@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className="border-2 border-gray-100 hover:border-[#40a8e0] transition-all">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">📞</span>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">+91 63635 37253</p>
                        <p className="text-gray-600">+91 96634 02333</p>
                        <p className="text-gray-600">
                          Mon-Sat: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className="border-2 border-gray-100 hover:border-[#40a8e0] transition-all">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">📍</span>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          Address
                        </h3>
                        <p className="text-gray-600">
                          Mayura Solar Systems
                          <br />
                          2-24A, Mathibettu Varanga
                          <br />
                          Muniyalu Post
                          <br />
                          Udupi, Karnataka - 574108
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-6 border-2 border-gray-100 shadow-lg">
                <CardBody>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send us a <span className="text-[#0087d3]">Message</span>
                  </h2>

                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg">
                      <p className="text-green-700 font-semibold">
                        ✓ Thank you! Your message has been sent successfully.
                      </p>
                    </div>
                  )}

                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-lg">
                      <p className="text-red-700 font-semibold">
                        ✗ {submitError}
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-900 font-semibold mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0087d3] focus:outline-none text-gray-900 placeholder:text-gray-400"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-900 font-semibold mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0087d3] focus:outline-none text-gray-900 placeholder:text-gray-400"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-900 font-semibold mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: {
                            value: /^\d{10}$/,
                            message:
                              'Please enter a valid 10-digit phone number',
                          },
                        })}
                        type="tel"
                        placeholder="10-digit phone number"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0087d3] focus:outline-none text-gray-900 placeholder:text-gray-400"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-gray-900 font-semibold mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        id="subject"
                        {...register('subject', {
                          required: 'Subject is required',
                        })}
                        type="text"
                        placeholder="Product inquiry / Quote request"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0087d3] focus:outline-none text-gray-900 placeholder:text-gray-400"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-gray-900 font-semibold mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        {...register('message', {
                          required: 'Message is required',
                        })}
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0087d3] focus:outline-none text-gray-900 placeholder:text-gray-400 resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0087d3] to-blue-600 text-white font-bold shadow-lg hover:shadow-xl transition-all"
                      size="lg"
                      isLoading={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose{' '}
            <span className="text-[#0087d3]">Mayura Solar Systems?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-white transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm">
                24-hour response to all inquiries
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-white transition-all">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">Free Quote</h3>
              <p className="text-gray-600 text-sm">
                No-obligation free consultation
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-white transition-all">
              <div className="text-4xl mb-4">👨‍🔧</div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">
                Experienced solar professionals
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-white transition-all">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">
                Premium products with warranty
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
