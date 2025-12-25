import { useInView } from 'react-intersection-observer';
import { PhoneCall, Search, FileText, Settings, HeadphonesIcon, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: 1,
    icon: PhoneCall,
    title: 'Консультация',
    description: 'Бесплатный звонок для понимания ваших задач',
    highlight: 'Бесплатно',
  },
  {
    number: 2,
    icon: Search,
    title: 'Аудит бизнеса',
    description: 'Анализ текущего состояния и выявление точек роста',
    highlight: '',
  },
  {
    number: 3,
    icon: FileText,
    title: 'План оптимизации',
    description: 'Разработка стратегии с конкретными KPI',
    highlight: '',
  },
  {
    number: 4,
    icon: Settings,
    title: 'Внедрение',
    description: 'Настройка 1С, защита IP, оптимизация процессов',
    highlight: '2-4 недели',
  },
  {
    number: 5,
    icon: HeadphonesIcon,
    title: 'Поддержка',
    description: 'Постоянное сопровождение и консультации',
    highlight: '24/7',
  },
  {
    number: 6,
    icon: Target,
    title: 'Результаты',
    description: 'Измеримая экономия и рост эффективности',
    highlight: 'Гарантия',
  },
];

const Process = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToContacts = () => {
    const element = document.querySelector('#contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-section text-primary-foreground">
            Этапы работы: <span className="text-accent">Прозрачно</span> от начала до результата
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Мы гарантируем безопасность и контроль на каждом этапе
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className={`relative bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:border-accent/50 transition-all duration-300 ${
                inView ? 'fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-accent-foreground shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-4 mt-2">
                <step.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-serif font-bold text-primary-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm mb-3">
                {step.description}
              </p>

              {/* Highlight Badge */}
              {step.highlight && (
                <span className="inline-block bg-accent/20 text-accent text-xs font-medium px-3 py-1 rounded-full">
                  {step.highlight}
                </span>
              )}

              {/* Arrow to next step */}
              {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-accent/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Visual transformation */}
        <div className="bg-primary-foreground/5 rounded-xl p-6 md:p-8 mb-12 border border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="text-center md:text-right">
              <div className="text-primary-foreground/60 text-sm mb-1">До работы с нами</div>
              <div className="text-primary-foreground font-medium">Хаос в учете, риски потерь</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-accent/50"></div>
              <ArrowRight className="w-8 h-8 text-accent" />
              <div className="w-8 h-px bg-accent/50"></div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-accent text-sm mb-1">После работы с нами</div>
              <div className="text-accent font-medium">Автоматизация, рост на 25%</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="lg" className="pulse-gold" onClick={scrollToContacts}>
            Начать трансформацию бизнеса
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
