import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import mentorEmerson from "@/assets/mentor_emerson.jpg";
import mentorRafael from "@/assets/mentor_rafael.png";

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
            className="relative p-8 md:p-10 rounded-sm border border-gold-muted/30 bg-gradient-to-br from-surface-2 to-surface-1 group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gold opacity-40" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/30 mb-6 group-hover:border-primary/60 transition-all duration-500">
                <img
                  src={mentorEmerson}
                  alt="Emerson - Mentor AMB"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={768}
                  height={768}
                />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-1">Emerson</h3>
              <p className="text-primary/60 text-xs font-body tracking-[0.2em] uppercase mb-3">Fundador & Mentor Principal</p>
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
                e criar estratégias de vendas que realmente funcionam.
              </p>
            </div>
          </motion.div>

          {/* Rafael Duarte */}
          <motion.div
            className="relative p-8 md:p-10 rounded-sm border border-gold-muted/30 bg-gradient-to-br from-surface-2 to-surface-1 group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gold opacity-40" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/30 mb-6 group-hover:border-primary/60 transition-all duration-500">
                <img
                  src={mentorRafael}
                  alt="Rafael Duarte - Especialista Audiovisual"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={768}
                  height={768}
                />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-1">Rafael Duarte</h3>
              <p className="text-primary/60 text-xs font-body tracking-[0.2em] uppercase mb-3">Sócio & Especialista Audiovisual</p>
              <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                Responsável pelas aulas de edição e criação audiovisual.
                Com domínio completo das principais ferramentas do mercado, ele vai te ensinar
                a criar conteúdos profissionais que captam atenção e elevam sua comunicação visual.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
