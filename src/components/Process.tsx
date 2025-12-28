import { useInView } from 'react-intersection-observer';
import { PhoneCall, Search, FileText, Settings, HeadphonesIcon, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: 1,
    icon: PhoneCall,
    title: 'Консультация',
    description: 'Обсудим ваши риски от изменений законов 2026 — прозрачно оценим ситуацию и найдем точки роста.',
    details: 'Бесплатный звонок для понимания ваших задач. Мы анализируем вашу текущую ситуацию и определяем ключевые риски в свете новых законодательных требований.',
    highlight: 'Бесплатно',
  },
  {
    number: 2,
    icon: Search,
    title: 'Аудит бизнеса',
    description: 'Контролируем финансы и процессы, выявляем потери для будущего роста.',
    details: 'Глубокий анализ всех аспектов вашего бизнеса: от бухгалтерии до IP-рисков. Выявляем скрытые издержки и возможности для оптимизации.',
    highlight: '3-5 дней',
  },
  {
    number: 3,
    icon: FileText,
    title: 'План оптимизации',
    description: 'Автоматизируем под новые требования, с фокусом на экономию издержек.',
    details: 'Разработка индивидуальной стратегии с конкретными KPI и сроками. Учитываем все изменения законодательства 2026 года.',
    highlight: 'Под ключ',
  },
  {
    number: 4,
    icon: Settings,
    title: 'Внедрение',
    description: 'Быстрая интеграция 1С и защита IP с гарантией контроля качества.',
    details: 'Настройка систем, интеграция процессов, обучение персонала. Гарантируем бесперебойную работу на каждом этапе внедрения.',
    highlight: '2-4 недели',
  },
  {
    number: 5,
    icon: HeadphonesIcon,
    title: 'Поддержка',
    description: 'Постоянный мониторинг для автоматизации и роста в 2026.',
    details: 'Техническая поддержка в рабочее время, регулярные обновления под новые законы, консультации по возникающим вопросам.',
    highlight: 'В рабочее время',
  },
  {
    number: 6,
    icon: Target,
    title: 'Результаты',
    description: 'Видимый рост капитала — прозрачные метрики успеха.',
    details: 'Измеримые показатели: экономия на налогах, рост производительности, защищенность активов. Регулярные отчеты о достигнутых результатах.',
    highlight: 'Гарантия',
  },
];

const transformations = [
  { from: 'От хаоса', to: 'к контролю' },
  { from: 'От издержек', to: 'к автоматизации' },
  { from: 'От рисков', to: 'к росту' },
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
            Этапы работы: <span className="text-accent">Прозрачность, контроль, автоматизация и рост</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Адаптировано к 2026 — мы гарантируем безопасность и контроль на каждом этапе
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
              <p className="text-primary-foreground/90 text-sm mb-3 font-medium">
                {step.description}
              </p>
              <p className="text-primary-foreground/60 text-xs mb-3">
                {step.details}
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
          <h3 className="text-xl font-serif font-bold text-primary-foreground text-center mb-6">
            Ваша трансформация с <span className="text-accent">Ари Консалт</span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {transformations.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary-foreground/60">{item.from}</span>
                  <ArrowRight className="w-5 h-5 text-accent" />
                  <span className="text-accent font-bold">{item.to}</span>
                </div>
              </div>
            ))}
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