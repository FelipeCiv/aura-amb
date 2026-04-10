import { motion } from "framer-motion";
import ambLogo from "@/assets/amb-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-radial-gold opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />

      <div className="container relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          <motion.img
            src={ambLogo}
            alt="AMB - Audiovisual Marketing Branding"
            className="w-48 md:w-64 lg:w-72 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />

          <div className="divider-gold w-32 mx-auto" />

          <motion.p
            className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-gold-light/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Mentoria Exclusiva
          </motion.p>

          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className="text-gold-gradient">Transforme</span>{" "}
            <span className="text-foreground">seu negócio através do</span>{" "}
            <span className="text-gold-gradient">Audiovisual, Marketing e Branding</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Aprenda a se posicionar, vender e escalar de forma estratégica e com propósito.
            O primeiro passo para viver do que você faz começa aqui.
          </motion.p>

          <motion.a
            href="#inscricao"
            className="mt-4 inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground font-body font-semibold text-sm md:text-base tracking-wider uppercase px-10 py-4 rounded-sm hover:shadow-gold transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Quero fazer parte
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
