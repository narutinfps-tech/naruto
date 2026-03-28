import { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Gift, 
  Smartphone, 
  Printer, 
  Edit3, 
  ShieldCheck, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  XCircle, 
  ArrowRight,
  Star,
  Users,
  DollarSign
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-semibold text-slate-800"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-rose-600" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const CHECKOUT_URL = 'https://pay.cakto.com.br/37s7mjh_813166';
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // UTMify link decoration refresh - more robust implementation
    const refreshUTMify = () => {
      if (typeof (window as any).utmify !== 'undefined' && (window as any).utmify.update) {
        (window as any).utmify.update();
        console.log('UTMify updated successfully');
      }
    };

    // Initial attempt
    refreshUTMify();

    // Multiple attempts to ensure script is loaded and React has finished rendering
    const timeouts = [500, 1000, 2000, 5000].map(delay => 
      setTimeout(refreshUTMify, delay)
    );
    
    // Simple countdown to end of day
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      const diff = endOfDay.getTime() - now.getTime();
      
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      
      setTimeLeft({ hours, minutes, seconds });
    }, 1000);
    return () => {
      clearInterval(timer);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-rose-100 selection:text-rose-900">
      {/* Urgency Bar */}
      <div className="bg-rose-600 py-2 text-center text-xs font-bold tracking-widest text-white uppercase sm:text-sm">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 sm:gap-4">
          <Zap className="h-4 w-4 text-white animate-pulse" />
          <span>OFERTA ESPECIAL DISPONÍVEL APENAS HOJE — {new Date().toLocaleDateString('pt-BR')}</span>
          <div className="hidden sm:flex items-center gap-1 font-mono text-white/90">
            <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Header/Nav removed */}

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-1 text-xs font-bold text-white shadow-sm"
              >
                <ShieldCheck className="h-4 w-4 fill-white" />
                <span>COMPRA 100% SEGURA</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 font-display text-3xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl max-w-4xl"
              >
                +500 Moldes de Lembrancinhas <span className="text-rose-600">Personalizáveis</span> para Editar no Canva e Imprimir
              </motion.h1>

              {/* Vimeo Video Section - Vertical Format */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 w-full max-w-[400px] overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="aspect-[9/16] w-full bg-black">
                  <iframe
                    src="https://player.vimeo.com/video/1177543174?autoplay=1&muted=1&loop=1&autopause=0"
                    className="h-full w-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="VSL Video"
                  ></iframe>
                </div>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8 max-w-xl text-base text-slate-600 sm:text-lg"
              >
                Crie personalizados profissionais em minutos — mesmo sem saber design.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center gap-4"
              >
                <motion.a 
                  href={CHECKOUT_URL}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="group relative flex items-center gap-2 rounded-2xl bg-rose-600 px-8 py-4 text-lg font-black text-white shadow-xl shadow-rose-200 transition-all hover:bg-rose-700 hover:-translate-y-1 active:scale-95"
                >
                  QUERO ACESSO IMEDIATO
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-rose-600" />
                  Garantia de 7 dias ou seu dinheiro de volta
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Infinite Carousel Section - Personalized Molds */}
        <section className="bg-slate-50 pt-12 pb-6 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 mb-8 text-center"
          >
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl uppercase">
              Lembrancinhas Prontas
            </h2>
            <p className="mt-1 text-slate-500 text-sm font-medium italic">Inspirações do que você pode criar</p>
          </motion.div>

          <div className="flex flex-col gap-8 overflow-x-hidden">
            {/* Row 1 */}
            <div className="relative flex">
              <motion.div
                className="flex gap-8 px-4"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[
                  "https://i.ibb.co/q3FWqygV/Whats-App-Image-2019-08-03-at-15-38-50.jpg",
                  "https://i.ibb.co/TDrHb6Ny/46440346-335203063938969-4715876229901713408-n-jpg.jpg",
                  "https://i.ibb.co/zWHYY5bD/46439106-257066271633430-8424552478221008896-n-jpg.jpg",
                  "https://i.ibb.co/gMpDksW0/menina-baby-shark-0007-N-veis-1-copiar-12-1.png",
                  "https://i.ibb.co/xNMfGt3/Um-Kit-PERFEITO-Nossa-Linha-Cl-ssica-sendo-bem-representada-com-esse-tema-que-eu-amei-montar.jpg",
                  "https://i.ibb.co/NgbM27Km/Um-Kit-PERFEITO-Nossa-Linha-Cl-ssica-sendo-bem-representada-com-esse-tema-que-eu-amei-montar-1.jpg",
                  "https://i.ibb.co/N2821RVx/Um-Kit-PERFEITO-Nossa-Linha-Cl-ssica-sendo-bem-representada-com-esse-tema-que-eu-amei-montar-2.jpg",
                  "https://i.ibb.co/3yGSdzp5/Liz-2-aninhos-Nossa-Linha-Cl-ssica-ficou-impec-vel-nesse-tema-Gostaram.jpg",
                  "https://i.ibb.co/99jnkG89/Liz-2-aninhos-Nossa-Linha-Cl-ssica-ficou-impec-vel-nesse-tema-Gostaram-1.jpg",
                  // Duplicate for seamless loop
                  "https://i.ibb.co/q3FWqygV/Whats-App-Image-2019-08-03-at-15-38-50.jpg",
                  "https://i.ibb.co/TDrHb6Ny/46440346-335203063938969-4715876229901713408-n-jpg.jpg",
                  "https://i.ibb.co/zWHYY5bD/46439106-257066271633430-8424552478221008896-n-jpg.jpg",
                  "https://i.ibb.co/gMpDksW0/menina-baby-shark-0007-N-veis-1-copiar-12-1.png",
                  "https://i.ibb.co/xNMfGt3/Um-Kit-PERFEITO-Nossa-Linha-Cl-ssica-sendo-bem-representada-com-esse-tema-que-eu-amei-montar.jpg",
                  "https://i.ibb.co/NgbM27Km/Um-Kit-PERFEITO-Nossa-Linha-Cl-ssica-sendo-bem-representada-com-esse-tema-que-eu-amei-montar-1.jpg",
                  "https://i.ibb.co/N2821RVx/Um-Kit-PERFEITO-Nossa-Linha-Cl-ssica-sendo-bem-representada-com-esse-tema-que-eu-amei-montar-2.jpg",
                  "https://i.ibb.co/3yGSdzp5/Liz-2-aninhos-Nossa-Linha-Cl-ssica-ficou-impec-vel-nesse-tema-Gostaram.jpg",
                  "https://i.ibb.co/99jnkG89/Liz-2-aninhos-Nossa-Linha-Cl-ssica-ficou-impec-vel-nesse-tema-Gostaram-1.jpg",
                ].map((src, index) => (
                  <div key={index} className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                    <img 
                      src={src} 
                      alt={`Exemplo de Lembrancinha ${index + 1}`} 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="relative flex">
              <motion.div
                className="flex gap-8 px-4"
                animate={{
                  x: ["-50%", "0%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 35,
                    ease: "linear",
                  },
                }}
              >
                {[
                  "https://i.ibb.co/HpNF1FHR/Whats-App-Image-2019-08-24-at-15-55-14-1-1.jpg",
                  "https://i.ibb.co/LDZxmbDJ/Save-Clip-App-654756651-17852402097687347-5524506261009578550-n.jpg",
                  "https://i.ibb.co/nspMRBZ7/ARQUIVO-1.jpg",
                  "https://i.ibb.co/TDrHb6Ny/46440346-335203063938969-4715876229901713408-n-jpg.jpg",
                  "https://i.ibb.co/xNMfGt3/Um-Kit-PERFEITO-Nossa-Linha-Cl-ssica-sendo-bem-representada-com-esse-tema-que-eu-amei-montar.jpg",
                  "https://i.ibb.co/NgbM27Km/Um-Kit-PERFEITO-Nossa-Linha-Cl-ssica-sendo-bem-representada-com-esse-tema-que-eu-amei-montar-1.jpg",
                  "https://i.ibb.co/N2821RVx/Um-Kit-PERFEITO-Nossa-Linha-Cl-ssica-sendo-bem-representada-com-esse-tema-que-eu-amei-montar-2.jpg",
                  "https://i.ibb.co/3yGSdzp5/Liz-2-aninhos-Nossa-Linha-Cl-ssica-ficou-impec-vel-nesse-tema-Gostaram.jpg",
                  "https://i.ibb.co/99jnkG89/Liz-2-aninhos-Nossa-Linha-Cl-ssica-ficou-impec-vel-nesse-tema-Gostaram-1.jpg",
                  // Duplicate for seamless loop
                  "https://i.ibb.co/HpNF1FHR/Whats-App-Image-2019-08-24-at-15-55-14-1-1.jpg",
                  "https://i.ibb.co/LDZxmbDJ/Save-Clip-App-654756651-17852402097687347-5524506261009578550-n.jpg",
                  "https://i.ibb.co/nspMRBZ7/ARQUIVO-1.jpg",
                  "https://i.ibb.co/TDrHb6Ny/46440346-335203063938969-4715876229901713408-n-jpg.jpg",
                  "https://i.ibb.co/xNMfGt3/Um-Kit-PERFEITO-Nossa-Linha-Cl-ssica-sendo-bem-representada-com-esse-tema-que-eu-amei-montar.jpg",
                  "https://i.ibb.co/NgbM27Km/Um-Kit-PERFEITO-Nossa-Linha-Cl-ssica-sendo-bem-representada-com-esse-tema-que-eu-amei-montar-1.jpg",
                  "https://i.ibb.co/N2821RVx/Um-Kit-PERFEITO-Nossa-Linha-Cl-ssica-sendo-bem-representada-com-esse-tema-que-eu-amei-montar-2.jpg",
                  "https://i.ibb.co/3yGSdzp5/Liz-2-aninhos-Nossa-Linha-Cl-ssica-ficou-impec-vel-nesse-tema-Gostaram.jpg",
                  "https://i.ibb.co/99jnkG89/Liz-2-aninhos-Nossa-Linha-Cl-ssica-ficou-impec-vel-nesse-tema-Gostaram-1.jpg",
                ].map((src, index) => (
                  <div key={index} className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                    <img 
                      src={src} 
                      alt={`Exemplo de Lembrancinha ${index + 8}`} 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Separator / Transition */}
        <div className="bg-slate-50 py-4 flex items-center justify-center">
          <div className="flex items-center gap-4 w-full max-w-4xl px-4">
            <div className="h-px flex-1 bg-slate-200"></div>
            <div className="rounded-full bg-rose-100 p-2">
              <Edit3 className="h-5 w-5 text-rose-600" />
            </div>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>
        </div>

        {/* Infinite Carousel Section - Canva Editable Molds */}
        <section className="bg-slate-50 pt-6 pb-12 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 mb-8 text-center"
          >
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl uppercase">
              Moldes Editáveis no Canva
            </h2>
            <p className="mt-1 text-slate-500 text-sm font-medium italic">Personalize tudo em poucos cliques</p>
          </motion.div>

          <div className="flex flex-col gap-8 overflow-x-hidden">
            {/* Row 1 */}
            <div className="relative flex">
              <motion.div
                className="flex gap-8 px-4"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {[
                  "https://i.ibb.co/gZ5fWN91/Screenshot-2026-03-22-17-27-47-779-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/0RgR1JCs/Screenshot-2026-03-22-17-27-05-107-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/z909tgK/Screenshot-2026-03-22-17-27-16-627-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/qYWtnstX/Screenshot-2026-03-22-17-27-46-001-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/N6B41JYq/Screenshot-2026-03-22-17-27-38-698-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/SSBzN3q/Screenshot-2026-03-22-17-26-50-624-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/39Jr0md4/Screenshot-2026-03-22-17-27-21-550-com-canva-editor-jpg.jpg",
                  // Duplicate for seamless loop
                  "https://i.ibb.co/gZ5fWN91/Screenshot-2026-03-22-17-27-47-779-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/0RgR1JCs/Screenshot-2026-03-22-17-27-05-107-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/z909tgK/Screenshot-2026-03-22-17-27-16-627-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/qYWtnstX/Screenshot-2026-03-22-17-27-46-001-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/N6B41JYq/Screenshot-2026-03-22-17-27-38-698-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/SSBzN3q/Screenshot-2026-03-22-17-26-50-624-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/39Jr0md4/Screenshot-2026-03-22-17-27-21-550-com-canva-editor-jpg.jpg",
                ].map((src, index) => (
                  <div key={index} className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                    <img 
                      src={src} 
                      alt={`Molde Editável Canva ${index + 1}`} 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="relative flex">
              <motion.div
                className="flex gap-8 px-4"
                animate={{
                  x: ["-50%", "0%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[
                  "https://i.ibb.co/6RtS5RQr/Screenshot-2026-03-22-17-26-53-008-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/N6TYpbwk/Screenshot-2026-03-22-17-27-02-742-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/rfGXtHjB/Screenshot-2026-03-22-17-26-59-718-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/k22m824D/Screenshot-2026-03-22-17-27-07-612-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/LX6pWH18/Screenshot-2026-03-22-17-27-44-135-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/JWPjJw5r/Screenshot-2026-03-22-17-27-19-053-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/w2xwMrg/Screenshot-2026-03-22-17-27-40-543-com-canva-editor-jpg.jpg",
                  // Duplicate for seamless loop
                  "https://i.ibb.co/6RtS5RQr/Screenshot-2026-03-22-17-26-53-008-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/N6TYpbwk/Screenshot-2026-03-22-17-27-02-742-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/rfGXtHjB/Screenshot-2026-03-22-17-26-59-718-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/k22m824D/Screenshot-2026-03-22-17-27-07-612-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/LX6pWH18/Screenshot-2026-03-22-17-27-44-135-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/JWPjJw5r/Screenshot-2026-03-22-17-27-19-053-com-canva-editor-jpg.jpg",
                  "https://i.ibb.co/w2xwMrg/Screenshot-2026-03-22-17-27-40-543-com-canva-editor-jpg.jpg",
                ].map((src, index) => (
                  <div key={index} className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                    <img 
                      src={src} 
                      alt={`Molde Editável Canva ${index + 6}`} 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center"
            >
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Por que escolher nossos moldes?</h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Clock, title: "Acesso Imediato", desc: "Receba tudo por e-mail na hora." },
                { icon: Smartphone, title: "Celular ou PC", desc: "Edite de onde quiser, como preferir." },
                { icon: Printer, title: "Pronto para Imprimir", desc: "Arquivos adaptados para papel A4." },
                { icon: Edit3, title: "100% Editável", desc: "Mude tudo diretamente no Canva." }
              ].map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:shadow-md"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-slate-900">{benefit.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What you receive */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10 font-display text-2xl font-bold sm:text-3xl"
              >
                O que você vai receber hoje?
              </motion.h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                {[
                  "500 moldes prontos para imprimir",
                  "200 kits festa completos",
                  "1.000 moldes editáveis no Canva",
                  "900 topos de bolo profissionais",
                  "Bônus: Cartão SUS personalizado"
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm"
                  >
                    <div className="rounded-full bg-rose-100 p-1 flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-rose-600" />
                    </div>
                    <p className="text-sm font-bold text-slate-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Objection Handling */}
        <section className="bg-slate-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-2xl font-bold sm:text-3xl mb-2">Você NÃO precisa:</h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { title: "Saber design", desc: "Estrutura pronta e profissional." },
                { title: "Programas caros", desc: "Use apenas o Canva gratuito." },
                { title: "Gastar com gráficas", desc: "Imprima você mesma em casa." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/5 border border-white/10"
                >
                  <XCircle className="h-8 w-8 text-red-400 mb-3" />
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl font-bold sm:text-4xl text-slate-900">Como funciona?</h2>
              <p className="mt-2 text-slate-500 font-medium">Simples como 1, 2, 3...</p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {[
                  { step: "01", title: "Acesse", desc: "Abra os moldes no seu Canva.", icon: Smartphone },
                  { step: "02", title: "Edite", desc: "Mude nome, idade ou tema.", icon: Edit3 },
                  { step: "03", title: "Imprima", desc: "Use sua impressora em papel A4.", icon: Printer },
                  { step: "04", title: "Monte", desc: "Recorte, cole e pronto!", icon: Gift }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-lg bg-rose-600 text-xs font-bold text-white shadow-lg">
                      {item.step}
                    </div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-1 text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    
                    {i < 3 && (
                      <div className="absolute top-1/2 -right-4 hidden lg:block translate-x-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="h-5 w-5 text-slate-300" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bonuses */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl bg-slate-900 p-8 md:p-16 text-white overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="mb-8 font-display text-2xl font-bold sm:text-4xl text-center">Ao adquirir hoje, você também recebe:</h2>
                <div className="grid gap-6 sm:grid-cols-2 w-full max-w-2xl">
                  {[
                    { 
                      title: "Cartão SUS Personalizado", 
                      desc: "O bônus queridinho para lembrancinhas.",
                      aspect: "w-24",
                      images: [
                        "https://i.ibb.co/nNYRjNCC/Whats-App-Image-2026-03-26-at-21-27-10.jpg",
                        "https://i.ibb.co/7dhX20X0/Whats-App-Image-2026-03-26-at-21-27-10-1.jpg",
                        "https://i.ibb.co/4ZcTSkVt/Whats-App-Image-2026-03-26-at-21-27-11.jpg",
                        "https://i.ibb.co/Y4b9RPsx/Whats-App-Image-2026-03-26-at-21-27-11-1.jpg",
                        "https://i.ibb.co/XhNL2c3/Whats-App-Image-2026-03-26-at-21-27-11-2.jpg"
                      ]
                    },
                    { 
                      title: "900 Topos de Bolo", 
                      desc: "Modelos profissionais para todas as ocasiões.",
                      aspect: "w-16",
                      images: [
                        "https://i.ibb.co/XxsZmx9V/John-2-aninhos-uma-fofura-s-diversas-t-cnicas-e-muito-amor-na-finaliza-o-Bolo-dcakesdoce.jpg",
                        "https://i.ibb.co/VY44ZfL9/Um-tema-super-querido-da-crian-ada-patrulha-canina-Pedro-3-aninhos-Bolo-dcakesdoceria-Topo.jpg",
                        "https://i.ibb.co/VphQTG60/Lucas-no-seu-primeiro-m-s-uma-fofura-Bolo-dcakesdoceria-Topo-laranpersonalizados-So.jpg",
                        "https://i.ibb.co/My9Xc6h1/O-tempo-voa-Matheus-3-meses-Bolo-dcakesdoceria-Topo-de-bolo-laranpersonalizados-Solic.jpg",
                        "https://i.ibb.co/VWgQK2CS/A-turma-mais-charmosa-e-querida-pela-crian-ada-a-patrulha-Maria-Cec-lia-4-aninhos-Bol.jpg",
                        "https://i.ibb.co/pVFhWWQ/Arrai-do-Jos-Rai-1-aninho-com-muiiiiito-forr-e-climinha-do-S-o-Jo-o-Bolo-polydoces-T.jpg",
                        "https://i.ibb.co/FLQqkCd4/Save-Clip-App-651475362-17850942597687347-5504981642704215487-n.jpg"
                      ]
                    }
                  ].map((bonus, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                      className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors overflow-hidden"
                    >
                      <div className="mb-2 text-rose-400 font-black text-xl">🎁</div>
                      <h3 className="text-lg font-bold mb-1">{bonus.title}</h3>
                      <p className="text-slate-400 text-xs mb-3">{bonus.desc}</p>
                      
                      {bonus.images && (
                        <div className="w-full mt-1 overflow-hidden relative">
                          <motion.div 
                            className="flex gap-2"
                            animate={{ x: [0, -(bonus.images.length * (bonus.aspect === 'w-24' ? 104 : 72))] }}
                            transition={{ duration: bonus.images.length * 2, repeat: Infinity, ease: "linear" }}
                          >
                            {[...bonus.images, ...bonus.images].map((img, idx) => (
                              <img 
                                key={idx} 
                                src={img} 
                                alt={`${bonus.title} ${idx}`} 
                                className={`h-16 ${bonus.aspect} object-contain bg-white/10 rounded-lg flex-shrink-0`}
                                referrerPolicy="no-referrer"
                              />
                            ))}
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pain/Contrast */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-3xl bg-white border border-slate-200"
              >
                <h3 className="text-xl font-bold mb-4 text-rose-600 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Sem nossos moldes:
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-slate-600">
                    <div className="mt-1 text-rose-400">•</div>
                    Horas tentando acertar medidas no Canva
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <div className="mt-1 text-rose-400">•</div>
                    Dificuldade para montar as dobras
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <div className="mt-1 text-rose-400">•</div>
                    Resultado amador que frustra clientes
                  </li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 rounded-3xl bg-rose-600 text-white shadow-xl shadow-rose-200"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Com nossos moldes:
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-rose-200">•</div>
                    Medidas exatas e 100% testadas
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-rose-200">•</div>
                    Mude cores e fotos em segundos
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-rose-200">•</div>
                    Resultado profissional que encanta
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-slate-100">
                {/* Left Side: Value Stack */}
                <div className="p-8 md:p-12 bg-slate-900 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <h2 className="font-display text-2xl font-black mb-6 sm:text-3xl leading-tight">
                      Tudo o que você precisa em um só lugar.
                    </h2>
                    
                    <div className="space-y-3 mb-8">
                      {[
                        "500 Moldes Prontos",
                        "200 Kits Festa Prontos",
                        "1.000 Moldes Editáveis",
                        "900 Topos de Bolo",
                        "Bônus: Cartão SUS",
                        "Acesso Vitalício"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-rose-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <ShieldCheck className="h-5 w-5 text-rose-400" />
                      <p className="text-xs text-slate-400">7 dias de garantia incondicional.</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Price & CTA */}
                <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center bg-white">
                  <div className="mb-6">
                    <span className="text-slate-400 line-through text-sm block mb-1">De R$ 97,00</span>
                    <div className="flex flex-col items-center">
                      <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-1">Por apenas</span>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-rose-600 font-black text-xl">R$</span>
                        <span className="text-rose-600 font-black text-7xl sm:text-8xl tracking-tighter leading-none">14,90</span>
                      </div>
                    </div>
                  </div>

                  <motion.a 
                    href={CHECKOUT_URL}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-6 py-5 text-xl font-black text-white shadow-xl shadow-rose-200 transition-all hover:bg-rose-700"
                  >
                    QUERO MEU ACESSO
                    <ArrowRight className="h-6 w-6" />
                  </motion.a>

                  <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pagamento 100% Seguro</p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: ShieldCheck, text: "Site Seguro" },
                  { icon: Zap, text: "Entrega Imediata" },
                  { icon: Clock, text: "Acesso Vitalício" },
                  { icon: Users, text: "+10.000 Alunos" }
                ].map((badge, i) => (
                  <div key={i} className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white border border-slate-100 shadow-sm text-xs font-medium text-slate-600">
                    <badge.icon className="h-3.5 w-3.5 text-rose-500" />
                    {badge.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-center mb-10 text-slate-900">Dúvidas Frequentes</h2>
            <div className="space-y-2">
              <FAQItem 
                question="Preciso saber mexer no Canva?" 
                answer="Não! É só clicar e arrastar. Enviamos um guia rápido para te ajudar." 
              />
              <FAQItem 
                question="Funciona no celular?" 
                answer="Sim! 100% compatível com o app do Canva no celular." 
              />
              <FAQItem 
                question="Posso imprimir em casa?" 
                answer="Sim! Formato A4 padrão para impressoras caseiras." 
              />
              <FAQItem 
                question="O acesso é imediato?" 
                answer="Sim! Você recebe tudo por e-mail logo após a confirmação." 
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4 mb-8 text-center">
            <h2 className="font-display text-2xl font-bold text-slate-900">O que nossas clientes dizem</h2>
          </div>

          <div className="relative flex overflow-hidden py-4">
            <motion.div 
              className="flex gap-4 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[
                "https://i.ibb.co/0jDyVvbf/Whats-App-Image-2026-03-26-at-23-44-08.jpg",
                "https://i.ibb.co/BVcgCyz0/Whats-App-Image-2026-03-26-at-23-44-09.jpg",
                "https://i.ibb.co/q3zBPHcS/Whats-App-Image-2026-03-26-at-23-44-09-1.jpg",
                "https://i.ibb.co/CsY9Cxt3/Whats-App-Image-2026-03-26-at-23-44-09-2.jpg"
              ].concat([
                "https://i.ibb.co/0jDyVvbf/Whats-App-Image-2026-03-26-at-23-44-08.jpg",
                "https://i.ibb.co/BVcgCyz0/Whats-App-Image-2026-03-26-at-23-44-09.jpg",
                "https://i.ibb.co/q3zBPHcS/Whats-App-Image-2026-03-26-at-23-44-09-1.jpg",
                "https://i.ibb.co/CsY9Cxt3/Whats-App-Image-2026-03-26-at-23-44-09-2.jpg"
              ]).map((src, i) => (
                <div key={i} className="w-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                  <img src={src} alt={`Depoimento ${i}`} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final Decision */}
        <section className="py-20 bg-slate-900 text-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl font-bold sm:text-4xl mb-12"
            >
              A ESCOLHA FINAL É SUA
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 opacity-60">
                <XCircle className="h-10 w-10 text-rose-400 mx-auto mb-4" />
                <p className="text-sm font-bold mb-2">Continuar perdendo tempo</p>
                <p className="text-xs text-slate-400">Tentando fazer tudo do zero e se frustrando.</p>
              </div>
              <div className="p-6 rounded-2xl bg-rose-600/20 border border-rose-500/30">
                <CheckCircle2 className="h-10 w-10 text-rose-400 mx-auto mb-4" />
                <p className="text-sm font-bold mb-2">Garantir seus moldes agora</p>
                <p className="text-xs text-rose-200/60">Economizar horas e ter resultados profissionais.</p>
              </div>
            </div>
            <motion.a 
              href={CHECKOUT_URL}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-8 py-5 text-xl font-black text-white shadow-xl shadow-rose-900/40"
            >
              QUERO MEUS MOLDES
              <ArrowRight className="h-6 w-6" />
            </motion.a>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-8 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-rose-600 text-white font-bold text-xs">M</div>
            <span className="font-display text-lg font-bold tracking-tight">Moldes<span className="text-rose-600">Pro</span></span>
          </div>
          <p className="text-slate-500 text-sm mb-4">© 2026 MoldesPro. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
