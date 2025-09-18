import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              [Add information about how parents can reach you for questions, enrollment, visits, or any other inquiries about your Farsi Sunday school.]
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center group hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone</h3>
                <p className="text-gray-600 text-lg">[Your phone number]</p>
                <p className="text-sm text-gray-500 mt-2">Call us during business hours</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center group hover:from-green-100 hover:to-green-200 transition-all duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
                <p className="text-gray-600 text-lg">[Your email address]</p>
                <p className="text-sm text-gray-500 mt-2">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl text-center group hover:from-red-100 hover:to-red-200 transition-all duration-300">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Address</h3>
                <p className="text-gray-600 text-lg">[Your school address]</p>
                <p className="text-sm text-gray-500 mt-2">Visit us on Sundays</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center group hover:from-purple-100 hover:to-purple-200 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Class Hours</h3>
                <p className="text-gray-600 text-lg">[Your class schedule]</p>
                <p className="text-sm text-gray-500 mt-2">Sunday school sessions</p>
              </div>
            </div>

            {/* Quick Registration */}
            <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Ready to Register?</h3>
              </div>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                [Add a message encouraging parents to register their children or schedule a visit to learn more about your program.]
              </p>
              <a
                href="[GOOGLE_FORM_LINK]"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md inline-flex items-center space-x-2"
              >
                <span>Register Now</span>
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              [Add a note about common questions parents ask]
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                [Question about enrollment process]
              </h3>
              <p className="text-gray-600">
                [Answer about how parents can enroll their children]
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                [Question about class levels]
              </h3>
              <p className="text-gray-600">
                [Answer about different age groups and skill levels]
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                [Question about schedule]
              </h3>
              <p className="text-gray-600">
                [Answer about class times and duration]
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                [Question about fees]
              </h3>
              <p className="text-gray-600">
                [Answer about tuition and any additional costs]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}