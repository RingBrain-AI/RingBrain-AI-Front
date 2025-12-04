import { Users, FileText, TrendingUp, Building2 } from 'lucide-react';

const Dashboard = () => {
    const stats = [
        {
            name: 'Registros Totales',
            value: '248',
            change: '+12%',
            changeType: 'increase',
            icon: Users,
            color: 'purple',
        },
        {
            name: 'Formularios Esta Semana',
            value: '42',
            change: '+8%',
            changeType: 'increase',
            icon: FileText,
            color: 'blue',
        },
        {
            name: 'Tasa de Conversión',
            value: '68%',
            change: '+5%',
            changeType: 'increase',
            icon: TrendingUp,
            color: 'green',
        },
        {
            name: 'Empresas Activas',
            value: '8',
            change: '+2',
            changeType: 'increase',
            icon: Building2,
            color: 'orange',
        },
    ];

    const colorClasses = {
        purple: 'bg-purple-100 text-purple-600',
        blue: 'bg-blue-100 text-blue-600',
        green: 'bg-green-100 text-green-600',
        orange: 'bg-orange-100 text-orange-600',
    };

    return (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="gradient-bg rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Bienvenido al Panel de Administración</h2>
                <p className="text-white/80">Gestiona los datos del formulario y visualiza las analíticas</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-lg ${colorClasses[stat.color]} flex items-center justify-center`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className={`text-sm font-semibold ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                {stat.change}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
                            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
                    <div className="space-y-3">
                        <a
                            href="/admin/form-data"
                            className="block p-4 rounded-lg border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all"
                        >
                            <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-purple-600" />
                                <div>
                                    <p className="font-medium text-gray-900">Gestionar Datos del Formulario</p>
                                    <p className="text-sm text-gray-600">Editar opciones de selects</p>
                                </div>
                            </div>
                        </a>
                        <a
                            href="/admin/analytics"
                            className="block p-4 rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all"
                        >
                            <div className="flex items-center gap-3">
                                <TrendingUp className="w-5 h-5 text-blue-600" />
                                <div>
                                    <p className="font-medium text-gray-900">Ver Analíticas</p>
                                    <p className="text-sm text-gray-600">Reportes y gráficas</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Actividad Reciente</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Nuevo registro</p>
                                <p className="text-xs text-gray-600">Hace 2 horas</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Datos actualizados</p>
                                <p className="text-xs text-gray-600">Hace 5 horas</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Nuevo estudiante</p>
                                <p className="text-xs text-gray-600">Hace 1 día</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
