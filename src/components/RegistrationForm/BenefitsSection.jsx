import { DollarSign, Clock, Award, Briefcase, Target, Zap } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'ISA - Acuerdo de Ingresos Compartidos',
      description: '$0 de inversión inicial. Solo pagas cuando consigues un empleo con salario superior a $2M',
    },
    {
      icon: Clock,
      title: 'Horarios Flexibles',
      description: 'Estudia en modalidad presencial u online adaptándote a tu necesidad',
    },
    {
      icon: Award,
      title: 'Mentoría Experta',
      description: 'Aprende de profesionales activos en empresas tech líderes',
    },
    {
      icon: Briefcase,
      title: 'Certificación Internacional',
      description: 'Obtén credenciales reconocidas por la industria global',
    },
    {
      icon: Target,
      title: 'Bolsa de Empleo',
      description: 'Acceso directo a oportunidades en +300 empresas aliadas',
    },
    {
      icon: Zap,
      title: '100% Práctico',
      description: 'Aprende haciendo proyectos reales desde el primer día',
    },
  ];

  return (
    <div className="space-y-6">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="icon-circle bg-purple-100 flex-shrink-0">
            <benefit.icon className="w-8 h-8 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {benefit.title}
            </h3>
            <p className="text-sm text-gray-600">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitsSection;
