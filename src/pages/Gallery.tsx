import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Calendar } from 'lucide-react';

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2025');

  // Gallery organized by years
  const galleryByYear = {
    '2025': [
      {
        url: 'https://images.pexels.com/photos/8197530/pexels-photo-8197530.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: '[Event/Activity Title]',
        description: '[Brief description of the photo from 2025]'
      },
      {
        url: 'https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: '[Event/Activity Title]',
        description: '[Brief description of the photo from 2025]'
      },
      {
        url: 'https://images.pexels.com/photos/8197547/pexels-photo-8197547.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: '[Event/Activity Title]',
        description: '[Brief description of the photo from 2025]'
      }
    ],
    '2024': [
      {
        url: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: '[Event/Activity Title]',
        description: '[Brief description of the photo from 2024]'
      },
      {
        url: 'https://images.pexels.com/photos/8197522/pexels-photo-8197522.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: '[Event/Activity Title]',
        description: '[Brief description of the photo from 2024]'
      },
      {
        url: 'https://images.pexels.com/photos/8197532/pexels-photo-8197532.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: '[Event/Activity Title]',
        description: '[Brief description of the photo from 2024]'
      }
    ],
    '2023': [
      {
        url: 'https://images.pexels.com/photos/8197534/pexels-photo-8197534.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: '[Event/Activity Title]',
        description: '[Brief description of the photo from 2023]'
      },
      {
        url: 'https://images.pexels.com/photos/8197536/pexels-photo-8197536.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: '[Event/Activity Title]',
        description: '[Brief description of the photo from 2023]'
      }
    ],
    '2022': [
      {
        url: 'https://images.pexels.com/photos/8197530/pexels-photo-8197530.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: '[Event/Activity Title]',
        description: '[Brief description of the photo from 2022]'
      }
    ]
  };

  const years = Object.keys(galleryByYear).sort((a, b) => parseInt(b) - parseInt(a));
  const currentYearImages = galleryByYear[selectedYear] || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentYearImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentYearImages.length) % currentYearImages.length);
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setCurrentImageIndex(0);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Gallery</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              [Add a description about the photos showing your school activities, events, student achievements, and memorable moments from your Farsi classes throughout the years.]
            </p>
          </div>
        </div>
      </section>

      {/* Year Selection */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="w-5 h-5 text-gray-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Select Year</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                  selectedYear === year
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Carousel */}
      {currentYearImages.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Featured from {selectedYear}</h3>
              <p className="text-gray-600">Click on any image to view it in full size</p>
            </div>
            
            <div className="relative mb-12">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={currentYearImages[currentImageIndex].url} 
                  alt={currentYearImages[currentImageIndex].title}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openModal(currentImageIndex)}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                
                {currentYearImages.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 p-3 rounded-full hover:bg-opacity-100 transition-all duration-200 shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 p-3 rounded-full hover:bg-opacity-100 transition-all duration-200 shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 p-4 rounded-lg max-w-md">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {currentYearImages[currentImageIndex].title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {currentYearImages[currentImageIndex].description}
                  </p>
                </div>

                {currentYearImages.length > 1 && (
                  <div className="absolute bottom-4 right-6 flex space-x-2">
                    {currentYearImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Photos from {selectedYear}</h2>
            <p className="text-lg text-gray-600">
              {currentYearImages.length > 0 
                ? `${currentYearImages.length} photos from ${selectedYear}` 
                : `No photos available for ${selectedYear} yet`}
            </p>
          </div>

          {currentYearImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentYearImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <div className="aspect-square overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                        <h4 className="font-semibold mb-1">{image.title}</h4>
                        <p className="text-sm">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Photos Yet</h3>
              <p className="text-gray-600">
                Photos from {selectedYear} will be added here as events and activities take place.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && currentYearImages.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            
            <img
              src={currentYearImages[currentImageIndex].url}
              alt={currentYearImages[currentImageIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
              <h3 className="font-semibold mb-1">{currentYearImages[currentImageIndex].title}</h3>
              <p className="text-sm text-gray-300">{currentYearImages[currentImageIndex].description}</p>
              <p className="text-xs text-gray-400 mt-1">{selectedYear}</p>
            </div>

            {currentYearImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to Be Part of Our Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            [Add an encouraging message about joining your school and creating new memories that will be featured in future galleries.]
          </p>
          <a
            href="[GOOGLE_FORM_LINK]"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg font-medium"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}