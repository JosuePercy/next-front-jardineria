import React from 'react'

const Contact = () => {
  return (
      <section id="contact" className="mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 mt-5">Contáctanos</h2>
          <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden p-6">
              {/* Mapa */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  {/* Mapa con marcador actualizado */}
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6740299512567!2d-76.94421352418489!3d-12.065934642259514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6e9ddfc8967%3A0x6459f0b7ca93ae71!2sAv.%20Javier%20Prado%20Este%207100%2C%20La%20Molina%2015026!5e0!3m2!1ses-419!2spe!4v1744318601793!5m2!1ses-419!2spe"
                      width="100%"
                      height="100%"
                      style={{ border: 0, zIndex: 0}}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                  ></iframe>

                  {/* Botón para abrir en Google Maps */}
                  <a
                      href="https://www.google.com/maps?q=-12.065934642259514,-76.94421352418489"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-md text-sm shadow-md hover:bg-blue-700"
                  >
                      📍 Ver en Google Maps
                  </a>
              </div>

              {/* Formulario */}
              <div className="w-full md:w-1/2 py-6 md:p-6">
                  <form className="space-y-4">
                      <div>
                          <label className="block text-gray-700 font-medium">Tu nombre *</label>
                          <input
                              type="text"
                              placeholder="Nombre"
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          />
                      </div>
                      <div>
                          <label className="block text-gray-700 font-medium">Correo electrónico *</label>
                          <input
                              type="email"
                              placeholder="Email"
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          />
                      </div>
                      <div>
                          <label className="block text-gray-700 font-medium">Teléfono *</label>
                          <input
                              type="tel"
                              placeholder="Teléfono"
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          />
                      </div>
                      <div>
                          <label className="block text-gray-700 font-medium">Descripción *</label>
                          <textarea
                              placeholder="Mensaje"
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          ></textarea>
                      </div>
                      <button
                          type="submit"
                          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition"
                      >
                          Enviar
                      </button>
                  </form>
              </div>
          </div>
      </section>
  )
}

export default Contact
