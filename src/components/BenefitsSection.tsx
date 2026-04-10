import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Aulas exclusivas de Marketing Digital e estratégias de vendas",
  "Módulos completos de edição e produção audiovisual",
  "Construção de marca pessoal e Branding estratégico",
  "Acompanhamento personalizado dos mentores",
  "Comunidade exclusiva de alunos e networking",
  "Material de apoio e templates prontos para uso",
  "Acesso a ferramentas e recursos profissionais",
  "Suporte contínuo para tirar dúvidas",
];

const BenefitsSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-surface-gradient" />

      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
              O que você recebe
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Tudo que está <span className="text-gold-gradient">incluso</span>
            </h2>
            <div className="divider-gold w-24 mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 p-5 md:p-6 rounded-sm border border-gold-muted/20 bg-surface-2/50 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground/90 font-light text-sm md:text-base">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
