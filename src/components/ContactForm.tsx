import { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const validateForm = () => {
    const newErrors: { name?: string; phone?: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Введите имя';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите телефон';
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Некорректный номер';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contacts" className="section-padding bg-background">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div className={`${inView ? 'fade-in-up' : 'opacity-0'}`}>
            <h2 className="heading-section text-foreground">
              Свяжитесь с нами: <span className="text-accent">Бонус — первая консультация</span>
            </h2>
            
            <p className="text-muted-foreground mb-4">
              Оставляйте заявку, записывайтесь на первую бесплатную консультацию — сэкономьте до 15 тыс. руб. и избегите трудностей в 2026
            </p>
            
            <div className="flex items-center gap-2 mb-6 text-accent">
              <Gift className="w-5 h-5" />
              <span className="font-medium">Бонус: Бесплатный чек-лист + первая консультация для сохранения бизнеса</span>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`h-12 ${errors.name ? 'border-destructive' : ''}`}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`h-12 ${errors.phone ? 'border-destructive' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                
                <Input
                  type="email"
                  placeholder="Email (необязательно)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                />
                
                <label className="flex items-start gap-2 text-sm text-muted-foreground cursor-pointer">
                  <input type="checkbox" required className="mt-1 rounded border-input" />
                  <span>Согласие с политикой конфиденциальности</span>
                </label>

                <Button variant="cta" type="submit" className="w-full h-12 text-base">
                  Получить консультацию бесплатно
                </Button>
              </form>
            ) : (
              <div className="bg-muted rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  Заявка отправлена!
                </h3>
                <p className="text-muted-foreground">
                  Мы свяжемся с вами в течение часа. Чек-лист отправлен на ваш email.
                </p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className={`${inView ? 'fade-in-up animation-delay-200' : 'opacity-0'}`}>
            <div className="bg-primary rounded-xl p-6 md:p-8 h-full">
              <h3 className="text-xl font-serif font-bold text-primary-foreground mb-6">
                Контактная информация
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="tel:+79383100035"
                  className="flex items-center gap-4 text-primary-foreground hover:text-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Телефон</div>
                    <div className="font-medium">+7 (938) 310-00-35</div>
                  </div>
                </a>
                
                <a 
                  href="mailto:Ar.i.1c@yandex.ru"
                  className="flex items-center gap-4 text-primary-foreground hover:text-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Email</div>
                    <div className="font-medium">Ar.i.1c@yandex.ru</div>
                  </div>
                </a>
                
                <div className="flex items-start gap-4 text-primary-foreground">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Адрес</div>
                    <div className="font-medium">
                      Кабардино-Балкарская Республика, г. Нальчик, проспект Кулиева, 10
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini trust indicators */}
              <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent">10+</div>
                    <div className="text-primary-foreground/70 text-sm">лет опыта</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">350+</div>
                    <div className="text-primary-foreground/70 text-sm">проектов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;