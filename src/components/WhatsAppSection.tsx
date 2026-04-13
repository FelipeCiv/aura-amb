import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppSection = () => {
  return (
    <section id="comunidade" className="relative py-24 md:py-32 overflow-hidden bg-surface-2">
      <div className="absolute inset-0 bg-radial-gold opacity-30" />
      
      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 divider-gold" />
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />

      <div className="container relative z-10 px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6 font-body">
                Comunidade Exclusiva
              </p>
              
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Entre para o nosso <span className="text-gold-gradient">Grupo de Mentoria</span>
              </h2>
              
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-8">
                Tenha acesso direto a estratégias exclusivas, networking de alto nível e suporte contínuo para acelerar seus resultados. Não caminhe sozinho na sua jornada.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative inline-block">
                  <div className="absolute -inset-1 bg-gold-gradient rounded-sm opacity-20 blur-lg" />
                  <motion.a
                    href="https://chat.whatsapp.com/BfSQBeZco3BC03VFappD1U?mode=gi_t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground font-body font-semibold text-base tracking-wider uppercase px-8 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Entrar no Grupo
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gold-gradient rounded-full opacity-10 blur-3xl animate-pulse" />
              <div className="relative bg-surface-3 border border-gold-subtle p-8 rounded-lg shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gold-subtle">
                  <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
                    <MessageCircle className="text-primary-foreground w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl">Mentoria AMB</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Grupo Oficial WhatsApp</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Networking com outros profissionais",
                    "Dicas semanais exclusivas",
                    "Avisos de novas mentorias",
                    "Suporte em tempo real"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-1.5 text-sm text-foreground/80">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gold-subtle">
                  <p className="text-center text-xs text-muted-foreground italic">
                    "A proximidade é a chave para o sucesso."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
