import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About RIWI */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                                R
                            </div>
                            <span className="text-xl font-bold text-white">RIWI</span>
                        </div>
                        <p className="text-sm mb-4">
                            Transformamos vidas a través de la educación en tecnología. Aprende programación e inglés sin costos iniciales.
                        </p>
                        {/* Social Media */}
                        <div className="flex gap-3">
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Programas */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Programas</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-purple-400 transition-colors">
                                    Desarrollo Web Full Stack
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition-colors">
                                    Inglés Técnico
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition-colors">
                                    Desarrollo Mobile
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition-colors">
                                    Data Science
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition-colors">
                                    UX/UI Design
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Empresa</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-purple-400 transition-colors">
                                    Sobre nosotros
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition-colors">
                                    Empresas aliadas
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition-colors">
                                    Historias de éxito
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition-colors">
                                    Trabaja con nosotros
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contacto</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                <span>Medellín, Colombia<br />Calle 7 Sur #42-70</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <a href="tel:+573001234567" className="hover:text-purple-400 transition-colors">
                                    +57 300 123 4567
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <a href="mailto:info@riwi.io" className="hover:text-purple-400 transition-colors">
                                    info@riwi.io
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p>© 2025 RIWI. Todos los derechos reservados.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-purple-400 transition-colors">
                                Términos y condiciones
                            </a>
                            <a href="#" className="hover:text-purple-400 transition-colors">
                                Política de privacidad
                            </a>
                            <a href="#" className="hover:text-purple-400 transition-colors">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
