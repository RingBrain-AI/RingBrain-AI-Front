import { ArrowRight, Rocket } from 'lucide-react';

const FinalCTA = () => {
    const scrollToForm = () => {
        document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative overflow-hidden">
            <div className="gradient-bg py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Rocket Icon */}
                    <div className="flex justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                            <Rocket className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        ¿Listo para transformar tu futuro?
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                        Únete a la próxima cohorte y comienza tu carrera en tecnología. No
                        necesitas experiencia previa, solo muchas ganas de aprender.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <button
                            onClick={scrollToForm}
                            className="btn-primary inline-flex items-center gap-2 text-lg group"
                        >
                            Inscríbete ahora gratis
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={scrollToForm}
                            className="btn-secondary inline-flex items-center gap-2 text-lg"
                        >
                            Agenda una asesoría
                        </button>
                    </div>

                    {/* Footer Info */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 pt-8">
                        <div className="flex items-center gap-2">
                            <span>✓</span>
                            <span>Cupos limitados</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>✓</span>
                            <span>Inicio: Enero 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>✓</span>
                            <span>Sin costo inicial</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
