import React from 'react'

const About = () => {
    return (
        <section id="about" className="bg-gray-50 py-12 md:py-20 px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 space-y-5">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Conectamos tu hogar con la <span className="text-emerald-600">naturaleza</span>
                        </h2>

                        <div className="space-y-4 text-gray-700">
                            <p className="text-lg font-medium text-emerald-700 border-l-4 border-emerald-400 pl-3 py-1">
                                Vivero Valle del Mantaro: Cultiva tu paz interior.
                            </p>

                            <p className="text-base md:text-lg">
                                Más que un vivero, somos un refugio natural donde cada planta tiene una historia que contar.
                            </p>

                            <p className="text-base md:text-lg">
                                Te ayudamos a crear espacios llenos de vida, armonía y frescura. Nuestro objetivo es brindarte más que decoración: te ofrecemos bienestar, purificación y un respiro natural dentro del caos diario.
                            </p>
                            <p className="text-base md:text-lg italic">
                                Visítanos y descubre cómo una planta puede transformar no solo tu espacio... sino también tu estado de ánimo.
                            </p>
                        </div>
                    </div>

                    {/* Image Section - Optimized for vertical */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="w-full max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition duration-300">
                            <img
                                src="/about/about.jpg"
                                alt="Plantas del Vivero Valle del Mantaro"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                                style={{ maxHeight: '450px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
