import React from 'react'

const Contact = () => {
  return (
      <section className="mx-auto p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Contactanos</h2>
          <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
              {/* Mapa */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  {/* Mapa con marcador */}
                  <iframe
                      className="w-full h-full"
                      src="https://maps.google.com/maps?q=-12.0401351,-76.9332329&z=15&output=embed"
                      allowFullScreen
                      loading="lazy"
                  ></iframe>
                  {/* Botón para abrir en Google Maps */}
                  <a
                      href="https://www.google.com/maps?q=-12.0401351,-76.9332329"
                      target="_blank  "
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-md text-sm shadow-md hover:bg-blue-700"
                  >
                      📍 Ver en Google Maps
                  </a>
              </div>

              {/* Formulario */}
              <div className="w-full md:w-1/2 p-6">
                  <form className="space-y-4">
                      <div>
                          <label className="block text-gray-700 font-medium">Your Name *</label>
                          <input
                              type="text"
                              placeholder="Name"
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          />
                      </div>
                      <div>
                          <label className="block text-gray-700 font-medium">Email *</label>
                          <input
                              type="email"
                              placeholder="Email"
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          />
                      </div>
                      <div>
                          <label className="block text-gray-700 font-medium">Phone Number *</label>
                          <input
                              type="tel"
                              placeholder="Phone"
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          />
                      </div>
                      <div>
                          <label className="block text-gray-700 font-medium">Description *</label>
                          <textarea
                              placeholder="Message"
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          ></textarea>
                      </div>
                      <button
                          type="submit"
                          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition"
                      >
                          Send
                      </button>
                  </form>
              </div>
          </div>
      </section>
  )
}

export default Contact
