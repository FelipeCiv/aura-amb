import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="inscricao" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-1 to-background" />
      <div className="absolute inset-0 bg-radial-gold opacity-40" />

      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 divider-gold" />
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />

      <div className="container relative z-10 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6 font-body">
            Vagas Limitadas
          </p>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Pronto para dar o <span className="text-gold-gradient">próximo passo</span>?
          </h2>

          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            A Mentoria AMB é para quem está cansado de resultados mediocres e quer finalmente
            transformar seu conhecimento em um negócio lucrativo e reconhecido.
          </p>

          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gold-gradient rounded-sm opacity-20 blur-lg" />
            <motion.a
              href="https://instagram.com/_emersonrf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground font-body font-semibold text-base md:text-lg tracking-wider uppercase px-12 py-5 rounded-sm hover:shadow-gold transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Quero garantir minha vaga
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
          </div>

          <p className="text-muted-foreground/60 text-xs mt-6 font-light">
            Entre em contato pelo Instagram para garantir sua vaga
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
