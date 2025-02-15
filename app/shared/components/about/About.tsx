import React from 'react'

const About = () => {
  return (
      <section id='about' className="px-6 bg-gray-50 py-20">
          {/* Título */}
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">
              Transformamos Tu Espacio con Belleza Natural
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Texto sobre la empresa */}
              <div>
                  <p className="text-gray-700 text-lg mb-6">
                      En <span className="font-semibold text-yellow-500">[Nombre de la Empresa]</span>, nos dedicamos a crear ambientes que
                      combinan naturaleza y diseño. Creemos que cada jardín puede ser una obra de arte, y nos apasiona transformar espacios
                      en lugares donde la belleza florezca.
                  </p>

                  {/* Servicios */}
                  <ul className="space-y-5">
                      {[
                          "Diseño único y personalizado para cada cliente",
                          "Jardines modernos y sostenibles",
                          "Mantenimiento profesional de espacios verdes",
                          "Asesoría en paisajismo de interiores y exteriores",
                          "Diseño de sistemas de riego eficientes"
                      ].map((service, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                              <span className="mr-3 text-yellow-500">•</span> {service}
                          </li>
                      ))}
                  </ul>
              </div>

              {/* Imagen inspiradora */}
              <div>
                  <img
                      src="https://www.jardinerosenlima.com/wp-content/uploads/2023/06/NOSOTROS.png"
                      alt="Jardinería Inspiradora"
                      className="rounded-xl shadow-xl w-full"
                  />
              </div>
          </div>
      </section>
  )
}

export default About
