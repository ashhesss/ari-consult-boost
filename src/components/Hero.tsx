import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Calculator, Settings, TrendingUp, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref: counterRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
    }
  };

  const services = [
    { icon: Calculator, label: 'Бухгалтерия' },
    { icon: Settings, label: '1С' },
    { icon: Shield, label: 'Защита IP' },
    { icon: TrendingUp, label: 'Оптимизация' },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(43, 100%, 39%) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24 px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-primary-foreground leading-tight">
              Оптимизируйте бизнес с{' '}
              <span className="text-accent">Ари Консалт</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mx-auto lg:mx-0">
              <span className="text-accent font-semibold">В 2026 году законы ужесточаются, издержки растут на 15%:</span>{' '}
              защитите и приумножьте свой капитал с нами
            </p>

            <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto lg:mx-0">
              Бухгалтерия, 1С и защита интеллектуальной собственности для малого и среднего бизнеса. 
              Сократите расходы на <span className="text-accent font-semibold">20%</span> за 30 дней, избегите штрафов от новых налогов и сохраните бизнес в росте.
            </p>

            {/* УТП Block */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-accent/30 fade-in-up animation-delay-200">
              <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
                Представьте: в 2026 году ваши конкуренты тонут в бюрократии и растущих налогах, а вы — 
                <span className="font-bold text-accent"> сэкономили на издержках</span>, 
                <span className="font-bold text-accent"> автоматизировали процессы</span> и 
                <span className="font-bold text-accent"> защитили IP</span>. Получите первую бесплатную консультацию — 
                и превратите угрозы в возможности для 
                <span className="font-bold text-accent"> приумножения капитала</span>. 
                Не ждите кризиса: действуйте сейчас, чтобы ваш бизнес не просто выжил, а 
                <span className="font-bold text-accent"> расцвел!</span>
              </p>
            </div>

            {/* Service Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              {services.map((service, index) => (
                <div 
                  key={service.label}
                  className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-2 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <service.icon className="w-5 h-5 text-accent" />
                  <span className="text-primary-foreground text-sm font-medium">{service.label}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div 
              ref={counterRef}
              className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  {inView ? <CountUp end={350} duration={2} suffix="+" /> : '0+'}
                </div>
                <div className="text-primary-foreground/80 text-sm">реализованных проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  {inView ? <CountUp end={10} duration={1.5} suffix="+" /> : '0+'}
                </div>
                <div className="text-primary-foreground/80 text-sm">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  {inView ? <CountUp end={95} duration={2} suffix="%" /> : '0%'}
                </div>
                <div className="text-primary-foreground/80 text-sm">успешных дел</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-card rounded-xl shadow-2xl p-6 md:p-8 fade-in-up animation-delay-200">
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-serif text-foreground mb-2">
                  Получите бесплатный аудит
                </h2>
                <p className="text-muted-foreground text-sm">
                  Экономьте время уже сегодня
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />
                  
                  <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
                    <input type="checkbox" required className="mt-1 rounded border-input" />
                    <span>Согласие с политикой конфиденциальности</span>
                  </label>

                  <Button variant="cta" type="submit" className="w-full h-12 text-base pulse-gold">
                    Получите первую бесплатную консультацию
                  </Button>

                  <div className="flex items-center gap-2 justify-center text-sm text-accent">
                    <CheckCircle className="w-4 h-4" />
                    <span>Избегите трудностей, сохраните бизнес и приумножьте капитал</span>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Заявка отправлена!</h3>
                  <p className="text-muted-foreground text-sm">
                    Мы свяжемся с вами в течение часа. Чек-лист по оптимизации отправлен на ваш email.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;