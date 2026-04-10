import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-1 to-background" />
      <div className="absolute inset-0 bg-radial-gold opacity-30" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-sm tracking-[0.3em] uppercase text-primary mb-6 font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Sobre a Mentoria
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Você sabe o que é a{" "}
            <span className="text-gold-gradient">Mentoria AMB</span>?
          </motion.h2>

          <div className="divider-gold w-24 mx-auto mb-10" />

          <motion.div
            className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>
              A Mentoria AMB foi criada para <span className="text-foreground font-medium">transformar profissionais e negócios</span> através dos pilares de{" "}
              <span className="text-primary font-medium">Audiovisual, Marketing e Branding</span>.
            </p>
            <p>
              Aqui, você aprende a se posicionar, vender e escalar de forma estratégica e com propósito.
              Nosso método é exclusivo, pensado para quem quer resultados reais e não apenas teoria.
            </p>
            <p className="text-primary/90 font-medium italic font-display text-xl">
              O primeiro passo para viver do que você faz começa aqui.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
