import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

// HARDCODED CREDENTIALS - TEMPORARY FOR DEVELOPMENT
const ADMIN_CREDENTIALS = {
    email: 'admin@riwi.io',
    password: 'riwi2025'
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Check if user is logged in on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('adminUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = (email, password) => {
        // Validate credentials
        if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
            const userData = {
                email: ADMIN_CREDENTIALS.email,
                name: 'Admin RIWI',
                role: 'admin'
            };
            setUser(userData);
            localStorage.setItem('adminUser', JSON.stringify(userData));
            return { success: true };
        }
        return { success: false, error: 'Credenciales inválidas' };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('adminUser');
    };

    const value = {
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isLoading
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
