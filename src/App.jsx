import Hero from './components/Hero';
import Features from './components/Features';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const scrollToForm = () => {
    document.getElementById('registro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero onScrollToForm={scrollToForm} />
      <Features />
      <RegistrationForm />
    </div>
  );
}

export default App;
