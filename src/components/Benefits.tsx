import { Check, Shield, Clock, FileCheck, TrendingUp, Zap, Lock, AlertTriangle, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';

const benefits = [
  { icon: TrendingUp, text: 'Экономия 20-30% на финансах в условиях роста налогов' },
  { icon: Zap, text: 'Быстрое внедрение за 2-4 недели — до новых законов' },
  { icon: Shield, text: '95% успеха в защите IP от усиленного контроля' },
  { icon: Lock, text: 'Эксклюзивная автоматизация для приумножения капитала' },
];

const guarantees = [
  { icon: Check, title: 'Качество', text: 'Результат или возврат средств' },
  { icon: Clock, title: 'Сроки', text: 'Строгое соблюдение дедлайнов' },
  { icon: FileCheck, title: 'Конфиденциальность', text: 'NDA для всех данных' },
  { icon: Scale, title: 'Защита от законов', text: 'Адаптируем контракты под новые правила' },
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
            Боитесь роста издержек в 2026? Мы гарантируем экономию с штрафами за просрочку
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
              <span className="font-medium text-foreground text-sm">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Visual Transformation Chart */}
        <div 
          className={`bg-muted rounded-xl p-6 md:p-8 mb-16 ${
            inView ? 'fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <h3 className="text-2xl font-serif font-bold text-center mb-8 text-foreground">
            Трансформация вашего бизнеса <span className="text-accent">к 2026</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-destructive/10 rounded-lg p-6 border border-destructive/20">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h4 className="font-bold text-foreground text-lg">До 2026: высокие затраты от инфляции</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Налоговые издержки</span>
                  <div className="w-32 h-4 bg-destructive/40 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Временные затраты</span>
                  <div className="w-28 h-4 bg-destructive/40 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Риски IP</span>
                  <div className="w-24 h-4 bg-destructive/40 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
                <h4 className="font-bold text-foreground text-lg">После: снижение на 25%</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Налоговые издержки</span>
                  <div className="w-20 h-4 bg-accent rounded-full"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Временные затраты</span>
                  <div className="w-16 h-4 bg-accent rounded-full"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Риски IP</span>
                  <div className="w-8 h-4 bg-accent rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="bg-primary rounded-xl p-6 md:p-8">
          <h3 className="text-2xl font-serif font-bold text-center mb-8 text-primary-foreground">
            Наши <span className="text-accent">гарантии</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee) => (
              <div key={guarantee.title} className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold text-primary-foreground mb-1">{guarantee.title}</h4>
                <p className="text-primary-foreground/70 text-sm">{guarantee.text}</p>
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