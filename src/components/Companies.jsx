const Companies = () => {
    const companies = [
        { name: 'Mercado Libre' },
        { name: 'Rappi' },
        { name: 'Globant' },
        { name: 'PSL' },
        { name: 'Pragma' },
        { name: 'Endava' },
        { name: 'Nisum' },
        { name: 'Colpba' },
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Empresas donde trabajan nuestros graduados
                    </h2>
                    <p className="text-lg text-gray-600">
                        Más de 300 empresas confían en el talento formado por RIWI
                    </p>
                </div>

                {/* Companies Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="card flex items-center justify-center h-24 hover:scale-105"
                        >
                            <span className="text-lg font-semibold text-gray-700">
                                {company.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Companies;
