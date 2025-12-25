import { Check, Shield, Clock, FileCheck, TrendingUp, Zap, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';

const benefits = [
  { icon: TrendingUp, text: 'Экономия 20-30% на финансах' },
  { icon: Zap, text: 'Быстрое внедрение за 2-4 недели' },
  { icon: Shield, text: '95% успеха в защите IP' },
  { icon: Lock, text: 'Эксклюзивная автоматизация' },
];

const guarantees = [
  { icon: Check, title: 'Качество', text: 'Результат или возврат средств' },
  { icon: Clock, title: 'Сроки', text: 'Строгое соблюдение дедлайнов' },
  { icon: FileCheck, title: 'Конфиденциальность', text: 'NDA для всех данных' },
];

const pricingPlans = [
  {
    name: 'Базовый',
    price: '10 000',
    period: 'руб/мес',
    features: [
      'Бухгалтерское сопровождение',
      'Базовая настройка 1С',
      'Ежемесячные отчеты',
      'Email-поддержка',
    ],
    highlighted: false,
  },
  {
    name: 'Стандарт',
    price: '20 000',
    period: 'руб/мес',
    features: [
      'Всё из Базового',
      'Защита интеллектуальной собственности',
      'Расширенная 1С интеграция',
      'Приоритетная поддержка',
    ],
    highlighted: true,
  },
  {
    name: 'Премиум',
    price: '30 000',
    period: 'руб/мес',
    features: [
      'Всё из Стандарта',
      'Бережливое производство',
      'Индивидуальный менеджер',
      'Ежедневные консультации',
    ],
    highlighted: false,
  },
];

const Benefits = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToContacts = () => {
    const element = document.querySelector('#contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="benefits" className="section-padding bg-background">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-section">
            Преимущества: <span className="text-accent">Реальные результаты</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Не уверены в сроках? Мы гарантируем соблюдение с штрафами за просрочку
          </p>
        </div>

        {/* Benefits List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.text}
              className={`flex items-center gap-4 p-4 rounded-lg bg-muted ${
                inView ? 'fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="font-medium text-foreground">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative rounded-xl p-6 md:p-8 transition-all duration-300 ${
                plan.highlighted 
                  ? 'bg-primary text-primary-foreground scale-105 shadow-2xl' 
                  : 'bg-card border border-border hover:shadow-lg'
              } ${inView ? 'fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-sm font-medium px-4 py-1 rounded-full">
                  Популярный
                </div>
              )}
              
              <h3 className={`text-xl font-serif font-bold mb-2 ${
                plan.highlighted ? 'text-primary-foreground' : 'text-foreground'
              }`}>
                {plan.name}
              </h3>
              
              <div className="mb-6">
                <span className={`text-4xl font-bold ${
                  plan.highlighted ? 'text-accent' : 'text-accent'
                }`}>
                  {plan.price}
                </span>
                <span className={plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                  {' '}{plan.period}
                </span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className={`w-5 h-5 flex-shrink-0 ${
                      plan.highlighted ? 'text-accent' : 'text-accent'
                    }`} />
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-primary-foreground/90' : 'text-muted-foreground'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlighted ? 'cta' : 'outline'}
                className="w-full"
                onClick={scrollToContacts}
              >
                Выбрать
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="bg-muted rounded-xl p-6 md:p-8">
          <h3 className="text-2xl font-serif font-bold text-center mb-8 text-foreground">
            Наши <span className="text-accent">гарантии</span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {guarantees.map((guarantee) => (
              <div key={guarantee.title} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold text-foreground mb-1">{guarantee.title}</h4>
                <p className="text-muted-foreground text-sm">{guarantee.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cta" size="lg" className="pulse-gold" onClick={scrollToContacts}>
            Получите бесплатный аудит и сэкономьте 15%
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
