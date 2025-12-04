import { Users, Building2, RefreshCw, TrendingUp } from 'lucide-react';

const Stats = () => {
    const stats = [
        {
            icon: Users,
            number: '5,000+',
            label: 'Estudiantes graduados',
            color: 'bg-purple-100',
            iconColor: 'text-purple-600',
        },
        {
            icon: Building2,
            number: '300+',
            label: 'Empresas aliadas',
            color: 'bg-blue-100',
            iconColor: 'text-blue-600',
        },
        {
            icon: RefreshCw,
            number: '95%',
            label: 'Tasa de empleabilidad',
            color: 'bg-green-100',
            iconColor: 'text-green-600',
        },
        {
            icon: TrendingUp,
            number: '2.3x',
            label: 'Incremento salarial promedio',
            color: 'bg-orange-100',
            iconColor: 'text-orange-600',
        },
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center space-y-4"
                        >
                            {/* Icon Circle */}
                            <div className={`icon-circle ${stat.color}`}>
                                <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                            </div>

                            {/* Number */}
                            <div className="text-3xl md:text-4xl font-bold text-gray-900">
                                {stat.number}
                            </div>

                            {/* Label */}
                            <div className="text-sm text-gray-600">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
