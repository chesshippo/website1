import React from 'react';
import { Star, Users, BookOpen, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Farsi</span> with Joy
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  [Add your school's mission statement and welcoming message here. Describe how you make learning Farsi engaging and fun for children aged 6-16.]
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="[GOOGLE_FORM_LINK]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg font-medium text-center"
                >
                  Register Your Child
                </a>
                <a
                  href="/about"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-200 text-lg font-medium text-center"
                >
                  Learn More
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">[#]</div>
                  <div className="text-sm text-gray-600 mt-1">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">[#]</div>
                  <div className="text-sm text-gray-600 mt-1">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">[#]</div>
                  <div className="text-sm text-gray-600 mt-1">Qualified Teachers</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/8197530/pexels-photo-8197530.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Children learning" 
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg">
                  <Star className="w-6 h-6 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our School?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              [Add a brief description of what makes your school special and different from others.]
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center group hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Teaching</h3>
              <p className="text-gray-600">
                [Describe your qualified teachers and proven teaching methods.]
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center group hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Small Classes</h3>
              <p className="text-gray-600">
                [Talk about your small class sizes and personalized attention.]
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl text-center group hover:from-orange-100 hover:to-orange-200 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cultural Connection</h3>
              <p className="text-gray-600">
                [Explain how you connect children with Persian culture and heritage.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Child's Farsi Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            [Add an encouraging message about joining your school community and the benefits of learning Farsi.]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="[GOOGLE_FORM_LINK]"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg font-medium"
            >
              Register Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200 text-lg font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}