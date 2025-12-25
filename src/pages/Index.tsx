import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import Offers from '@/components/Offers';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <Offers />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
