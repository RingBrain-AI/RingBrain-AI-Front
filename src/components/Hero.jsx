import { ArrowRight, Rocket } from 'lucide-react';

const Hero = ({ onScrollToForm }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Purple Gradient Background */}
      <div className="gradient-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Rocket className="w-4 h-4 text-white" />
              <span className="text-sm text-white">Educación que transforma vidas</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white max-w-4xl mx-auto">
              Aprende Programación e Inglés para Transformar tu Futuro
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Conviértete en desarrollador de software y domina el inglés técnico.
              <br />
              Sin costos iniciales, pagas cuando consigues empleo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button 
                onClick={onScrollToForm}
                className="btn-primary inline-flex items-center gap-2 text-lg group"
              >
                Comienza gratis ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onScrollToForm}
                className="btn-secondary inline-flex items-center gap-2 text-lg"
              >
                Ver programas
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-16">
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-white">95%</div>
                <div className="text-sm text-white/80">Empleabilidad</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-white">$0</div>
                <div className="text-sm text-white/80">Hasta conseguir empleo</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-white">6 meses</div>
                <div className="text-sm text-white/80">De formación</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave SVG at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
