import { motion } from "framer-motion";
import heroDuo from "@/assets/hero-duo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Mentor background image blending with background */}
      <div className="absolute inset-0">
        <img
          src={heroDuo}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-full object-cover opacity-25 md:opacity-35"
          style={{
            maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 10%, transparent 65%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 10%, transparent 65%)",
          }}
          width={1536}
          height={1024}
        />
      </div>

      <div className="absolute inset-0 bg-radial-gold opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />

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
          <motion.p
            className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-gold-light/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Mentoria Exclusiva
          </motion.p>

          {/* Large VIP Title with hover gold effect */}
          <motion.div
            className="group cursor-default"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tight leading-none transition-all duration-700">
              <span className="block text-foreground group-hover:text-gold-gradient transition-all duration-700 relative">
                <span className="relative z-10 group-hover:[background:linear-gradient(135deg,hsl(43,80%,70%),hsl(43,72%,55%),hsl(43,60%,38%))] group-hover:[-webkit-background-clip:text] group-hover:[background-clip:text] group-hover:[-webkit-text-fill-color:transparent]">
                  AMB
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl bg-gold/20 -z-10" />
              </span>
            </h1>
            <div className="mt-3 flex items-center justify-center gap-4 md:gap-6">
              <div className="h-px flex-1 max-w-16 md:max-w-24 bg-gradient-to-r from-transparent to-gold/40 group-hover:to-gold/80 transition-all duration-700" />
              <span className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground group-hover:text-gold-light transition-colors duration-700">
                Audiovisual — Marketing — Branding
              </span>
              <div className="h-px flex-1 max-w-16 md:max-w-24 bg-gradient-to-l from-transparent to-gold/40 group-hover:to-gold/80 transition-all duration-700" />
            </div>
          </motion.div>

          <div className="divider-gold w-32 mx-auto" />

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-display font-semibold leading-tight max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <span className="text-gold-gradient">Transforme</span>{" "}
            <span className="text-foreground">seu negócio através do</span>{" "}
            <span className="text-gold-gradient">poder estratégico</span>
          </motion.h2>

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
