import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Landing Page Components
import Hero from './components/Hero';
import Stats from './components/Stats';
import Programs from './components/Programs';
import RegistrationForm from './components/RegistrationForm';
import Companies from './components/Companies';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Admin Components
import Login from './pages/admin/Login';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import FormDataManager from './pages/admin/FormDataManager';
import Analytics from './pages/admin/Analytics';

// Landing Page Component
const LandingPage = () => {
  const scrollToForm = () => {
    document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero onScrollToForm={scrollToForm} />
      <Stats />
      <Programs />
      <RegistrationForm />
      <Companies />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Admin Login Route (Public) */}
          <Route path="/admin/login" element={<Login />} />

          {/* Admin Routes (Protected) */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            {/* Redirect /admin to /admin/dashboard */}
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="form-data" element={<FormDataManager />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>

          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
