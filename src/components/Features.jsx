import { Code, Users, Briefcase, Award, Clock, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: 'Aprende desde cero',
      description: 'Desarrollo de software web sin necesidad de experiencia previa',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Clock,
      title: 'Metodología práctica',
      description: 'Proyectos reales y simulaciones laborales (BeLabs)',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Formación integral',
      description: 'Programación, habilidades socioemocionales e inglés funcional',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Briefcase,
      title: 'Conexión con la industria',
      description: 'Entorno real de la industria tech para proyectarte profesionalmente',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Acompañamiento constante',
      description: 'Trainer leaders y monitores durante todo el proceso',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Globe,
      title: 'Entrenamiento intensivo',
      description: '8 meses presencial de tiempo completo',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Razones para <span className="gradient-text">empezar</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Nuestro programa está diseñado para convertirte en un desarrollador completo
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 shadow-lg`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
