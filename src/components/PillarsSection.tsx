import { motion } from "framer-motion";
import { Camera, TrendingUp, Palette } from "lucide-react";

const pillars = [
  {
    icon: Camera,
    title: "Audiovisual",
    description: "Domine as ferramentas de criação e edição de conteúdo audiovisual. Aprenda a produzir vídeos profissionais que convertem e posicionam sua marca no mercado.",
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    description: "Estratégias avançadas de marketing digital para atrair, engajar e converter. Aprenda a criar funis de vendas e campanhas que geram resultados reais.",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Construa uma marca memorável e autêntica. Posicione-se como autoridade no seu nicho com identidade visual e comunicação estratégica.",
  },
];

const PillarsSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-surface-gradient" />

      <div className="container relative z-10 px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Os Três Pilares
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            A base da sua <span className="text-gold-gradient">transformação</span>
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="group relative p-8 md:p-10 rounded-sm border border-gold-muted/30 bg-gradient-to-b from-surface-2 to-surface-1 hover:border-primary/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-radial-gold opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-sm" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-sm bg-gold-muted/30 flex items-center justify-center mb-6 group-hover:shadow-gold transition-all duration-500">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
