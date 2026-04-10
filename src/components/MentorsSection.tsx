import { motion } from "framer-motion";
import { Instagram, Camera } from "lucide-react";

const MentorsSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-1 to-background" />
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      <div className="container relative z-10 px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Seus Mentores
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Quem vai te guiar nessa <span className="text-gold-gradient">jornada</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Emerson */}
          <motion.div
            className="relative p-8 md:p-10 rounded-sm border border-gold-muted/30 bg-gradient-to-br from-surface-2 to-surface-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gold opacity-40" />
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-gold-muted/40 border-2 border-primary/30 flex items-center justify-center mb-6">
                <span className="text-2xl font-display font-bold text-primary">E</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">Emerson</h3>
              <a
                href="https://instagram.com/_emersonrf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary/80 hover:text-primary transition-colors text-sm font-body mb-6"
              >
                <Instagram className="w-4 h-4" />
                @_emersonrf
              </a>
              <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                Criador da Mentoria AMB e especialista em Marketing e Branding. 
                Emerson ensina como se posicionar no mercado digital, construir uma marca forte 
                e criar estratégias de vendas que realmente funcionam. Sua experiência no mercado 
                traz uma visão prática e orientada a resultados.
              </p>
            </div>
          </motion.div>

          {/* Sócio */}
          <motion.div
            className="relative p-8 md:p-10 rounded-sm border border-gold-muted/30 bg-gradient-to-br from-surface-2 to-surface-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gold opacity-40" />
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-gold-muted/40 border-2 border-primary/30 flex items-center justify-center mb-6">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">Especialista Audiovisual</h3>
              <p className="text-primary/60 text-sm font-body mb-6">Sócio & Co-fundador</p>
              <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                Responsável pelas aulas de edição e criação audiovisual. 
                Com domínio completo das principais ferramentas do mercado, ele vai te ensinar 
                a criar conteúdos profissionais que captam atenção, geram engajamento 
                e elevam o nível da sua comunicação visual.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
