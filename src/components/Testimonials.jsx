import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "RIWI cambió mi vida completamente. Pasé de no tener experiencia en tech a trabajar en una de las startups más grandes de Latinoamérica. El modelo ISA me permitió estudiar sin preocupaciones económicas.",
            name: "María González",
            role: "Full Stack Developer en Rappi",
            salary: "De $1.2M a $4.5M",
            rating: 5,
        },
        {
            quote: "Lo mejor de RIWI es que aprendes haciendo. Los proyectos son reales y los mentores te preparan para las entrevistas. El inglés técnico fue clave para conseguir mi trabajo actual.",
            name: "Carlos Ramírez",
            role: "Software Engineer en Globant",
            salary: "De $0 a $5M",
            rating: 5,
        },
        {
            quote: "Antes trabajaba en un call center. Hoy soy desarrolladora en Mercado Libre gracias a RIWI. Los talleres de entrevistas y el acompañamiento hasta conseguir empleo fue fundamental.",
            name: "Andrea Morales",
            role: "Frontend Developer en Mercado Libre",
            salary: "De $1M a $6M",
            rating: 5,
        },
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Historias de éxito
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Miles de personas han transformado sus vidas con RIWI. Estas son algunas de sus historias.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="card relative"
                        >
                            {/* Quote Icon */}
                            <Quote className="w-12 h-12 text-purple-200 mb-4" />

                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 mb-6 italic">
                                "{testimonial.quote}"
                            </p>

                            {/* Author Info */}
                            <div className="border-t pt-4">
                                <div className="flex items-center gap-3">
                                    {/* Avatar placeholder */}
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {testimonial.role}
                                        </div>
                                        <div className="text-sm text-purple-600 font-medium">
                                            {testimonial.salary}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
