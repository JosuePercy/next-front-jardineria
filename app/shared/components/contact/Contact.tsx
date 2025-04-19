'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react'


type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
}


const Contact = () => {

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Datos a enviar:", formData);
        setIsSubmitting(true);


        const hiddenFields = {
            _subject: `Nuevo mensaje de ${formData.name} - Valle del Mantaro`,
            _template: 'table',
            _autoresponse: `Hola ${formData.name}, gracias por contactar a 🌱 Valle del Mantaro 🌱. Te responderemos en 24 horas.`
        };

        try {
            const response = await fetch('https://formsubmit.co/ajax/Viverovalledelmantaro@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ ...formData, ...hiddenFields })
            });

            if (response.ok) {
                setSubmitSuccess(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };



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
                        style={{ border: 0, zIndex: 0 }}
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
                    <div className="w-full md:w-1/2 py-6 md:p-6">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700 font-medium">Tu nombre *</label>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Correo electrónico *</label>
                                <input
                                    type="email"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Teléfono *</label>
                                <input
                                    type="tel"
                                    placeholder="Teléfono"
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Descripción *</label>
                                <textarea
                                    placeholder="Mensaje"
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Enviando...
                                    </div>
                                ) : submitSuccess ? (
                                    "✓ Enviado"
                                ) : (
                                    "Enviar"
                                )}
                            </button>
                        </form>
                    </div>
            </div>
        </section>
    )
}

export default Contact
