import { Calculator, Settings, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import CountUp from 'react-countup';

const services = [
  {
    icon: Calculator,
    title: 'Бухгалтерия под ключ',
    subtitle: 'Адаптирована к 2026 году — минимизируйте риски от новых налогов и издержек',
    description: 'До: хаос в учете и штрафы от ФНС. После: автоматизация, экономия 20% и рост бизнеса на 25% в условиях инфляции.',
    benefits: [
      'Полноценный отдел бухгалтерии без найма штата (экономия до 30% на зарплатах)',
      'Зарплатно-кадровая часть с учетом обновленных трудовых законов',
      'Обработка документов: связь с контрагентами, сбор первички, автоматизация обмена',
      'Предварительные отчеты и ежемесячные консультации для прогнозирования рисков',
      'Снижение налогов 15-25% за счет оптимизации под новые правила 2026',
    ],
    price: 'От 7 тыс. руб./мес',
    cta: 'Подробнее о защите от 2026 изменений',
  },
  {
    icon: Settings,
    title: 'Внедрение и поддержка 1С',
    subtitle: 'Интегрируйте систему за 2-4 недели, чтобы сэкономить время в 2026 году',
    description: 'До: разрозненные данные и ручной труд. После: единая система управления с экономией 30% времени.',
    benefits: [
      'Экономия времени 30% с учетом новых отчетных требований',
      'Интеграция с IP-защитой для безопасности данных',
      'Настройка под специфику вашего бизнеса',
      'Техническая поддержка и обновления 24/7',
      'Обучение персонала работе с системой',
    ],
    price: 'От 4 400 руб./мес',
    cta: 'Узнать о быстром внедрении',
  },
  {
    icon: Shield,
    title: 'Юридическое сопровождение',
    subtitle: 'Защитите активы в эпоху ужесточения IP-прав в 2026',
    description: 'До: уязвимость к судебным искам. После: полная защита и приумножение капитала через безопасные сделки.',
    benefits: [
      'Открытие/закрытие компаний с минимизацией бюрократии',
      'Договорная работа: составление и анализ контрактов для снижения рисков',
      'Защита патентов и товарных знаков с 95% успехом',
      'Проверка контрагентов на надежность, чтобы избежать убытков от мошенничества',
      'Консультации по новым законам для предотвращения штрафов до 100 тыс. руб.',
    ],
    price: 'От 10 тыс. руб./мес',
    cta: 'Защитить бизнес сейчас',
  },
  {
    icon: TrendingUp,
    title: 'Бережливое производство',
    subtitle: 'Оптимизируйте процессы, чтобы противостоять росту издержек в 2026',
    description: 'До: неэффективные процессы и потери. После: рост на 25% и устойчивость к экономическим вызовам 2026.',
    benefits: [
      'Выявление ценности конечного продукта для фокуса на прибыли',
      'Построение бизнес-процессов компании с автоматизацией',
      'Создание оргструктуры, регламентов и чек-листов для эффективности',
      'Устранение потерь и рост производительности на 20-30%',
      'Адаптация к инфляции: снижение затрат на 20% в условиях удорожания ресурсов',
    ],
    price: 'От 15 тыс. руб./мес',
    cta: 'Оптимизировать процессы',
  },
];

const Services = () => {
  const { ref: counterRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToContacts = () => {
    const element = document.querySelector('#contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-section">
            Услуги для <span className="text-accent">роста вашего бизнеса</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            С 350+ проектами мы знаем, как адаптировать бизнес к 2026. 
            В 2026: налоги растут — мы снижаем их для вас.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-service group fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-accent text-sm font-medium">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 italic">
                {service.description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-2 mb-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-foreground">
                    <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="bg-primary/5 rounded-lg p-4 mb-4 border border-accent/20">
                <span className="text-accent font-bold text-lg">{service.price}</span>
              </div>

              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300"
                onClick={scrollToContacts}
              >
                {service.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Counter Section */}
        <div 
          ref={counterRef}
          className="bg-primary rounded-xl p-8 md:p-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {inView ? <CountUp end={350} duration={2.5} suffix="+" /> : '0+'}
              </div>
              <div className="text-primary-foreground">реализованных проектов</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {inView ? <CountUp end={25} duration={2} suffix="%" /> : '0%'}
              </div>
              <div className="text-primary-foreground">средняя экономия</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {inView ? <CountUp end={4} duration={1.5} /> : '0'}
              </div>
              <div className="text-primary-foreground">недели внедрения</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;