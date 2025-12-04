import { BarChart3, TrendingUp } from 'lucide-react';

const Analytics = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Analíticas y Reportes</h2>
                <p className="text-gray-600 mt-1">Visualiza métricas y tendencias</p>
            </div>

            {/* Coming Soon */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                <div className="max-w-md mx-auto">
                    <div className="w-20 h-20 gradient-bg rounded-2xl mx-auto mb-6 flex items-center justify-center">
                        <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Próximamente</h3>
                    <p className="text-gray-600 mb-6">
                        Esta sección estará disponible pronto con gráficas detalladas, reportes de conversión,
                        análisis de demografía y métricas de rendimiento.
                    </p>
                    <div className="inline-flex items-center gap-2 text-purple-600 font-medium">
                        <TrendingUp className="w-5 h-5" />
                        <span>En desarrollo</span>
                    </div>
                </div>
            </div>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    {
                        title: 'Tendencias de Registro',
                        description: 'Visualiza el crecimiento de registros en el tiempo'
                    },
                    {
                        title: 'Demografía',
                        description: 'Analiza la distribución por edad, género y ubicación'
                    },
                    {
                        title: 'Conversión',
                        description: 'Métricas de tasa de conversión y abandono de formularios'
                    }
                ].map((feature, index) => (
                    <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                        <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Analytics;
