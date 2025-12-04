import { Code2, Globe, Smartphone, Zap } from 'lucide-react';

const Programs = () => {
    const programs = [
        {
            icon: Code2,
            title: 'Desarrollo Web Full Stack',
            duration: '6 meses',
            description: 'Aprende a crear aplicaciones web completas desde cero',
            skills: [
                'HTML, CSS y JavaScript moderno',
                'React y desarrollo Frontend',
                'Node.js y bases de datos',
                'APIs REST y desarrollo Backend',
                'Git y metodologías ágiles',
                'Proyectos reales de la industria',
            ],
            iconColor: 'bg-purple-600',
        },
        {
            icon: Globe,
            title: 'Inglés Técnico para Programadores',
            duration: '6 meses',
            description: 'Domina el inglés necesario para trabajar en equipos internacionales',
            skills: [
                'Vocabulario técnico de programación',
                'Conversación en entrevistas técnicas',
                'Lectura de documentación en inglés',
                'Escritura de código y comentarios',
                'Comunicación en equipos remotos',
                'Presentaciones y dailies en inglés',
            ],
            iconColor: 'bg-blue-600',
        },
        {
            icon: Smartphone,
            title: 'Desarrollo Mobile',
            duration: '6 meses',
            description: 'Crea aplicaciones móviles nativas y multiplataforma',
            skills: [
                'React Native y Flutter',
                'Diseño de interfaces móviles',
                'APIs y servicios backend',
                'Publicación en App Store y Play Store',
                'Optimización de rendimiento',
                'Integración con servicios cloud',
            ],
            iconColor: 'bg-green-600',
        },
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200">
                        <Zap className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-purple-600 font-medium">Programas intensivos</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Nuestros Programas
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Formación integral en programación e inglés diseñada para que consigas empleo
                        en empresas tech internacionales
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="card group hover:scale-105"
                        >
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl ${program.iconColor} p-3 mb-4`}>
                                <program.icon className="w-full h-full text-white" />
                            </div>

                            {/* Title & Duration */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {program.title}
                            </h3>
                            <div className="text-sm text-purple-600 font-medium mb-4">
                                {program.duration}
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 mb-6">
                                {program.description}
                            </p>

                            {/* Skills List */}
                            <ul className="space-y-2">
                                {program.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="flex items-start gap-2 text-sm text-gray-700">
                                        <span className="text-purple-600 mt-1">•</span>
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Combo Box */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="gradient-bg p-8 md:p-12">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm p-3">
                                <Code2 className="w-full h-full text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    Programa Completo: Código + Inglés
                                </h3>
                                <p className="text-white/90">
                                    La combinación perfecta para destacar en el mercado tech internacional
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="flex items-center gap-2 mb-4">
                                    <Code2 className="w-5 h-5 text-white" />
                                    <h4 className="text-lg font-semibold text-white">Desarrollo de Software</h4>
                                </div>
                                <p className="text-white/80 text-sm">
                                    Conviértete en Full Stack Developer con proyectos reales y mentoría personalizada
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="flex items-center gap-2 mb-4">
                                    <Globe className="w-5 h-5 text-white" />
                                    <h4 className="text-lg font-semibold text-white">Inglés Técnico</h4>
                                </div>
                                <p className="text-white/80 text-sm">
                                    Domina el inglés profesional para trabajar en equipos internacionales
                                </p>
                            </div>
                        </div>

                        <button className="btn-primary">
                            Quiero este programa
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
