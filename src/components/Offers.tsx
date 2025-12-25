import { useState, useEffect } from 'react';
import { X, Gift, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useInView } from 'react-intersection-observer';

interface OfferPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const OfferPopup = ({ isOpen, onClose }: OfferPopupProps) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 3,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    if (!isOpen) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card rounded-xl shadow-2xl w-full max-w-md p-6 md:p-8 border-2 border-accent animate-in zoom-in-95 fade-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
            Эксклюзивное предложение!
          </h3>
          <p className="text-muted-foreground">
            Скидка <span className="text-accent font-bold">15%</span> или <span className="text-accent font-bold">5 000 руб.</span> на первую услугу
          </p>
        </div>

        {/* Timer */}
        <div className="bg-primary rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-accent" />
            <span className="text-primary-foreground text-sm">Осталось времени:</span>
          </div>
          <div className="flex justify-center gap-3">
            {[
              { value: timeLeft.days, label: 'дн' },
              { value: timeLeft.hours, label: 'ч' },
              { value: timeLeft.minutes, label: 'мин' },
              { value: timeLeft.seconds, label: 'сек' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-accent font-mono">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-primary-foreground/70 text-xs">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="text-center mb-6">
          <div className="text-muted-foreground line-through text-lg">20 000 руб.</div>
          <div className="text-3xl font-bold text-accent">От 15 000 руб.</div>
          <div className="text-sm text-muted-foreground mt-1">Срок действия: до 31.01.2026</div>
        </div>

        {/* Form or Success */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="text"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="tel"
              placeholder="Телефон"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Button variant="cta" type="submit" className="w-full">
              Получить скидку
            </Button>
          </form>
        ) : (
          <div className="text-center py-4">
            <div className="text-accent font-bold mb-2">Заявка отправлена!</div>
            <p className="text-muted-foreground text-sm">Мы свяжемся в течение часа</p>
          </div>
        )}

        {/* FOMO */}
        <div className="flex items-center justify-center gap-2 mt-4 text-destructive text-sm">
          <AlertTriangle className="w-4 h-4" />
          <span>Только 10 мест по акции!</span>
        </div>
      </div>
    </div>
  );
};

const Offers = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 3,
    minutes: 45,
    seconds: 30,
  });

  // Show popup after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="offers" className="section-padding bg-muted">
        <div className="container-custom" ref={ref}>
          <div 
            className={`bg-gradient-to-br from-primary via-secondary to-primary rounded-xl p-6 md:p-10 lg:p-12 border-2 border-accent shadow-2xl ${
              inView ? 'fade-in-up' : 'opacity-0'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Gift className="w-4 h-4" />
                  Специальное предложение
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
                  Скидка <span className="text-accent">15%</span> на первую услугу
                </h2>
                
                <p className="text-primary-foreground/80 text-lg mb-6">
                  Закажите консультацию сегодня и получите эксклюзивную скидку. 
                  <span className="text-accent font-medium"> Экономия до 5 000 рублей!</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <div>
                    <div className="text-primary-foreground/60 line-through text-lg">20 000 руб.</div>
                    <div className="text-3xl font-bold text-accent">От 15 000 руб.</div>
                  </div>
                  <Button variant="cta" size="lg" onClick={() => setIsPopupOpen(true)}>
                    Получить скидку
                  </Button>
                </div>

                <div className="flex items-center gap-2 mt-4 justify-center lg:justify-start text-destructive/90">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm font-medium">Не упустите: только 10 мест по акции!</span>
                </div>
              </div>

              {/* Timer */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-primary-foreground/20">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                  <span className="text-primary-foreground text-lg font-medium">До конца акции:</span>
                </div>
                
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { value: timeLeft.days, label: 'Дней' },
                    { value: timeLeft.hours, label: 'Часов' },
                    { value: timeLeft.minutes, label: 'Минут' },
                    { value: timeLeft.seconds, label: 'Секунд' },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="bg-primary rounded-lg p-3 mb-2">
                        <div className="text-3xl md:text-4xl font-bold text-accent font-mono">
                          {String(item.value).padStart(2, '0')}
                        </div>
                      </div>
                      <div className="text-primary-foreground/70 text-xs">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-4 text-primary-foreground/60 text-sm">
                  Срок действия: до 31.01.2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OfferPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default Offers;
