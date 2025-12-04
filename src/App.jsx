import Hero from './components/Hero';
import Stats from './components/Stats';
import Programs from './components/Programs';
import RegistrationForm from './components/RegistrationForm';
import Companies from './components/Companies';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
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
}

export default App;
