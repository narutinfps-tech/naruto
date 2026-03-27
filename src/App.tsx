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
    return () => clearInterval(timer);
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
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-1 text-sm font-bold text-white shadow-sm"
              >
                <ShieldCheck className="h-4 w-4 fill-white" />
                <span>COMPRA 100% SEGURA E PROTEGIDA</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 font-display text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-6xl lg:text-7xl max-w-4xl"
              >
                +2.600 Moldes e Kits <span className="text-rose-600">Personalizáveis</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-10 max-w-2xl text-lg text-slate-600 sm:text-xl"
              >
                Para Editar no Canva e Imprimir em Casa. Crie sacolinhas, kits e personalizados profissionais em poucos minutos — mesmo sem saber design.
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
                  className="group relative flex items-center gap-2 rounded-2xl bg-rose-600 px-8 py-5 text-xl font-black text-white shadow-xl shadow-rose-200 transition-all hover:bg-rose-700 hover:-translate-y-1 active:scale-95"
                >
                  QUERO ACESSO IMEDIATO
                  <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </motion.a>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-rose-600" />
                  Garantia de 7 dias ou seu dinheiro de volta
                </div>
              </motion.div>

              {/* Mockup Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-16 w-full max-w-5xl rounded-3xl border border-stone-200 bg-white p-4 shadow-2xl"
              >
                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-stone-100 relative group">
                  <img 
                    src="https://picsum.photos/seed/crafts/1200/675" 
                    alt="Preview dos moldes" 
                    className="h-full w-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-white/90 p-6 shadow-xl backdrop-blur-sm">
                      <Gift className="h-12 w-12 text-indigo-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Infinite Carousel Section - Personalized Molds */}
        <section className="bg-slate-50 pt-16 pb-8 overflow-hidden">
          <div className="container mx-auto px-4 mb-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl uppercase">
              Lembrancinhas Prontas
            </h2>
            <p className="mt-2 text-slate-500 font-medium italic">Inspirações do que você pode criar</p>
            <div className="mt-4 h-1 w-20 bg-rose-600 mx-auto rounded-full"></div>
          </div>

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
        <section className="bg-slate-50 pt-8 pb-16 overflow-hidden">
          <div className="container mx-auto px-4 mb-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl uppercase">
              Moldes Editáveis no Canva
            </h2>
            <p className="mt-2 text-slate-500 font-medium italic">Personalize tudo em poucos cliques</p>
            <div className="mt-4 h-1 w-20 bg-rose-600 mx-auto rounded-full"></div>
          </div>

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
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Por que escolher nossos moldes?</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Clock, title: "Acesso Imediato", desc: "Receba tudo por e-mail logo após a confirmação da compra." },
                { icon: Smartphone, title: "Celular ou PC", desc: "Edite de onde quiser. Funciona perfeitamente em qualquer dispositivo." },
                { icon: Printer, title: "Pronto para Imprimir", desc: "Arquivos adaptados para papel A4 comum. Imprima em casa." },
                { icon: Edit3, title: "100% Editável", desc: "Mude cores, textos, imagens e temas diretamente no Canva." }
              ].map((benefit, i) => (
                <div key={i} className="flex flex-col items-center text-center rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all hover:shadow-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you receive */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-12 font-display text-3xl font-bold sm:text-4xl">O que você vai receber hoje?</h2>
              <div className="grid sm:grid-cols-2 gap-8 text-left">
                {[
                  "500 moldes prontos para imprimir",
                  "200 kits festa completos e prontos",
                  "1.000 moldes 100% editáveis no Canva",
                  "900 topos de bolo profissionais",
                  "Bônus: Cartão SUS personalizado"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="mt-1 rounded-full bg-rose-100 p-1 flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-rose-600" />
                    </div>
                    <p className="text-lg font-bold text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Objection Handling */}
        <section className="bg-slate-900 py-24 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">Você NÃO precisa:</h2>
              <p className="text-slate-400">Esqueça as dificuldades do passado.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { title: "Saber design", desc: "Os moldes já vêm com a estrutura profissional pronta." },
                { title: "Programas caros", desc: "Nada de Photoshop ou Corel. Use apenas o Canva gratuito." },
                { title: "Gastar com gráficas", desc: "Economize centenas de reais imprimindo você mesma." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <XCircle className="h-10 w-10 text-red-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold sm:text-4xl text-slate-900">Como funciona?</h2>
              <p className="mt-2 text-slate-500 font-medium">Simples como 1, 2, 3...</p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {[
                  { step: "01", title: "Acesse", desc: "Abra os moldes no seu Canva.", icon: Smartphone },
                  { step: "02", title: "Edite", desc: "Mude nome, idade ou tema.", icon: Edit3 },
                  { step: "03", title: "Imprima", desc: "Use sua impressora em papel A4.", icon: Printer },
                  { step: "04", title: "Monte", desc: "Recorte, cole e pronto!", icon: Gift }
                ].map((item, i) => (
                  <div key={i} className="group relative flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* For Whom */}
        <section className="py-24 bg-rose-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold sm:text-4xl mb-10 text-center">Para quem é este material?</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { icon: Users, text: "Quem quer economizar em festas" },
                  { icon: Gift, text: "Quem deseja fazer personalizados em casa" },
                  { icon: DollarSign, text: "Quem quer começar a vender lembrancinhas" },
                  { icon: Printer, text: "Gráficas e papelarias que buscam agilidade" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/20 hover:scale-[1.02]">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <item.icon className="h-10 w-10 text-rose-200" />
                    </div>
                    <span className="font-bold text-2xl">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bonuses */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl bg-slate-900 p-8 md:p-16 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-rose-500/20 px-4 py-1 text-sm font-bold text-rose-400 ring-1 bg-rose-500/30">
                  <Gift className="h-4 w-4" />
                  <span>BÔNUS EXCLUSIVOS</span>
                </div>
                <h2 className="mb-12 font-display text-3xl font-bold sm:text-5xl">Ao adquirir hoje, você também recebe:</h2>
                <div className="grid gap-8 sm:grid-cols-2 w-full max-w-2xl">
                  {[
                    { 
                      title: "Cartão SUS Personalizado", 
                      desc: "O bônus queridinho para lembrancinhas criativas.",
                      aspect: "w-32",
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
                      aspect: "w-20",
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
                    <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors overflow-hidden">
                      <div className="mb-4 text-rose-400 font-black text-2xl">🎁</div>
                      <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                      <p className="text-slate-400 text-sm mb-4">{bonus.desc}</p>
                      
                      {bonus.images && (
                        <div className="w-full mt-2 overflow-hidden relative">
                          <motion.div 
                            className="flex gap-2"
                            animate={{ x: [0, -(bonus.images.length * (bonus.aspect === 'w-32' ? 136 : 88))] }}
                            transition={{ duration: bonus.images.length * 2, repeat: Infinity, ease: "linear" }}
                          >
                            {[...bonus.images, ...bonus.images].map((img, idx) => (
                              <img 
                                key={idx} 
                                src={img} 
                                alt={`${bonus.title} ${idx}`} 
                                className={`h-20 ${bonus.aspect} object-contain bg-white/10 rounded-lg flex-shrink-0`}
                                referrerPolicy="no-referrer"
                              />
                            ))}
                          </motion.div>
                          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
                          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain/Contrast */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="p-8 rounded-3xl bg-white border border-slate-200">
                <h3 className="text-2xl font-bold mb-6 text-rose-600 flex items-center gap-2">
                  <XCircle className="h-6 w-6" />
                  Se você tentar fazer do zero:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-600">
                    <div className="mt-1 text-rose-400">•</div>
                    Vai perder horas tentando acertar as medidas no Canva
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <div className="mt-1 text-rose-400">•</div>
                    Vai ter dificuldade para montar as dobras corretamente
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <div className="mt-1 text-rose-400">•</div>
                    Pode não ficar com aparência profissional e frustrar seus clientes
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-3xl bg-rose-600 text-white shadow-xl shadow-rose-200">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6" />
                  Com nossos moldes prontos:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-rose-200">•</div>
                    Você já recebe tudo com as medidas exatas e testadas
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-rose-200">•</div>
                    É só arrastar suas fotos e mudar as cores em segundos
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-rose-200">•</div>
                    Resultado profissional garantido que encanta qualquer pessoa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(225,29,72,0.15)] bg-white border border-slate-100">
                {/* Left Side: Value Stack */}
                <div className="p-8 md:p-12 lg:p-16 bg-slate-900 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-rose-500/20 px-4 py-1 text-sm font-bold text-rose-300 ring-1 ring-rose-500/30">
                      <Zap className="h-4 w-4" />
                      <span>OFERTA EXCLUSIVA</span>
                    </div>
                    
                    <h2 className="font-display text-3xl font-black mb-6 sm:text-4xl lg:text-5xl leading-tight">
                      Tudo o que você precisa em um só lugar.
                    </h2>
                    
                    <div className="space-y-4 mb-8">
                      {[
                        "500 Moldes Prontos",
                        "200 Kits Festa Prontos",
                        "1.000 Moldes Editáveis no Canva",
                        "900 Topos de Bolo",
                        "Bônus: Cartão SUS Personalizado",
                        "Acesso Vitalício"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-rose-500/20 flex items-center justify-center">
                            <CheckCircle2 className="h-4 w-4 text-rose-400" />
                          </div>
                          <span className="text-slate-300 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="h-12 w-12 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Garantia Incondicional</p>
                        <p className="text-xs text-slate-400">7 dias para testar ou seu dinheiro de volta.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Price & CTA */}
                <div className="p-6 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center relative bg-white">
                  <div className="mb-8 w-full max-w-sm mx-auto">
                    <span className="text-slate-400 line-through text-lg font-medium block mb-2">De R$ 97,00</span>
                    <div className="flex flex-col items-center">
                      <span className="text-slate-500 font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-2">Por apenas</span>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-rose-600 font-black text-2xl sm:text-3xl lg:text-4xl">R$</span>
                        <span className="text-rose-600 font-black text-6xl sm:text-8xl lg:text-9xl tracking-tighter leading-none">14,90</span>
                      </div>
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-[10px] sm:text-xs font-black uppercase tracking-widest animate-pulse border border-rose-100">
                      <Clock className="h-3.5 w-3.5" />
                      Últimas vagas com este valor
                    </div>
                  </div>

                  <motion.a 
                    href={CHECKOUT_URL}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full group relative flex items-center justify-center gap-3 rounded-2xl bg-rose-600 px-8 py-7 text-2xl font-black text-white shadow-2xl shadow-rose-200 transition-all hover:bg-rose-700 hover:-translate-y-1 active:scale-[0.98]"
                  >
                    QUERO MEU ACESSO AGORA
                    <ArrowRight className="h-7 w-7 transition-transform group-hover:translate-x-2" />
                  </motion.a>

                  <div className="mt-8 flex flex-col gap-4 w-full">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Pagamento 100% Seguro via Criptografia</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges below card */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: ShieldCheck, text: "Site Seguro" },
                  { icon: Zap, text: "Entrega Imediata" },
                  { icon: Clock, text: "Acesso Vitalício" },
                  { icon: Users, text: "+10.000 Alunos" }
                ].map((badge, i) => (
                  <div key={i} className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <badge.icon className="h-4 w-4 text-rose-500" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl text-slate-900">Dúvidas Frequentes</h2>
            </div>
            <div className="space-y-2">
              <FAQItem 
                question="Preciso saber mexer no Canva?" 
                answer="Não! Os moldes são extremamente simples e intuitivos. Você só precisa clicar e arrastar para mudar cores e textos. Além disso, enviamos um guia rápido para te ajudar." 
              />
              <FAQItem 
                question="Funciona no celular?" 
                answer="Sim! Você pode editar tudo pelo aplicativo do Canva no seu celular ou pelo navegador. É 100% compatível." 
              />
              <FAQItem 
                question="Posso imprimir em casa?" 
                answer="Com certeza! Todos os arquivos foram adaptados para o formato de papel A4, que é o padrão das impressoras caseiras." 
              />
              <FAQItem 
                question="Posso vender os produtos?" 
                answer="Sim! Você tem total liberdade para usar os moldes para criar produtos físicos e vendê-los para seus clientes, gerando uma excelente renda extra." 
              />
              <FAQItem 
                question="O acesso é imediato?" 
                answer="Sim! Assim que o seu pagamento for confirmado, você receberá um e-mail com todos os links de acesso aos moldes." 
              />
              <FAQItem 
                question="E se eu não gostar?" 
                answer="Nós confiamos tanto no nosso material que oferecemos 7 dias de garantia incondicional. Se não gostar, devolvemos seu dinheiro." 
              />
            </div>
          </div>
        </section>

        {/* Final Decision */}
        <section className="py-24 bg-slate-900 text-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold sm:text-5xl mb-8">A decisão final é sua...</h2>
            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 opacity-50">
                <XCircle className="h-12 w-12 text-rose-400 mx-auto mb-4" />
                <p className="font-bold mb-2">Continuar gastando</p>
                <p className="text-slate-400 text-sm">Com personalizados caros e dependendo de outras pessoas.</p>
              </div>
              <div className="p-8 rounded-3xl bg-rose-600/20 border border-rose-500/30 ring-2 ring-rose-500">
                <CheckCircle2 className="h-12 w-12 text-rose-400 mx-auto mb-4" />
                <p className="font-bold mb-2">Criar seus próprios</p>
                <p className="text-rose-100 text-sm">Economizar muito e até ganhar dinheiro vendendo para outros.</p>
              </div>
            </div>
            <motion.a 
              href={CHECKOUT_URL}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="group relative inline-flex items-center gap-2 rounded-2xl bg-rose-600 px-10 py-6 text-2xl font-black text-white shadow-xl shadow-rose-500/20 transition-all hover:bg-rose-700 hover:-translate-y-1 active:scale-95"
            >
              QUERO MEU ACESSO AGORA
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <div className="mt-12 flex flex-col gap-4 w-full">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Ambiente de Pagamento 100% Seguro</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-12 border-t border-slate-200">
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
