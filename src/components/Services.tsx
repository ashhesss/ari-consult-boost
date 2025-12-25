import { Calculator, Settings, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import CountUp from 'react-countup';

const services = [
  {
    icon: Calculator,
    title: 'Бухгалтерия под ключ',
    description: 'Мы ведем учет, чтобы вы фокусировались на развитии бизнеса.',
    benefits: [
      'Снижение налогов 15-25%',
      'Автоматическая отчетность',
      'Оптимизация расходов',
    ],
    transformation: {
      before: 'До: Ручной труд, ошибки',
      after: 'После: Автоматизация, экономия 20%'
    }
  },
  {
    icon: Settings,
    title: 'Внедрение и поддержка 1С',
    description: 'Быстрая настройка и интеграция системы за 2-4 недели.',
    benefits: [
      'Экономия времени 30%',
      'Интеграция с другими системами',
      'Техническая поддержка 24/7',
    ],
    transformation: {
      before: 'До: Разрозненные данные',
      after: 'После: Единая система управления'
    }
  },
  {
    icon: Shield,
    title: 'Юридическое сопровождение',
    description: 'Защита интеллектуальной собственности с 95% успехом.',
    benefits: [
      'Регистрация товарных знаков',
      'Защита патентов',
      'Сопровождение споров',
    ],
    transformation: {
      before: 'До: Риск потери бренда',
      after: 'После: Полная защита активов'
    }
  },
  {
    icon: TrendingUp,
    title: 'Бережливое производство',
    description: 'Оптимизация процессов со снижением затрат на 20%.',
    benefits: [
      'Автоматизация процессов',
      'Устранение потерь',
      'Рост производительности',
    ],
    transformation: {
      before: 'До: Избыточные затраты',
      after: 'После: Экономия 20%+ ежемесячно'
    }
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Комплексные решения для оптимизации финансов, автоматизации и защиты активов
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
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Benefits List */}
              <ul className="space-y-2 mb-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-foreground">
                    <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Transformation */}
              <div className="bg-muted rounded-lg p-4 mb-4">
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-muted-foreground">{service.transformation.before}</span>
                  <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-accent font-medium">{service.transformation.after}</span>
                </div>
              </div>

              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300"
                onClick={scrollToContacts}
              >
                Подробнее
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
