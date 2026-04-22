import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Para quem é a Mentoria AMB?",
    answer: "A Mentoria AMB é para profissionais, empreendedores e criadores de conteúdo que desejam se posicionar no mercado digital, construir uma marca forte e dominar as ferramentas de audiovisual, marketing e branding.",
  },
  {
    question: "Preciso ter experiência prévia?",
    answer: "Não. A mentoria foi desenhada para atender desde iniciantes até profissionais que querem aprimorar suas habilidades. O conteúdo é progressivo e acompanhado de perto pelos mentores.",
  },
  {
    question: "Como funcionam as aulas?",
    answer: "As aulas são online e ao vivo, com gravações disponíveis para assistir quando quiser. Além disso, você terá acesso a materiais de apoio, templates e suporte contínuo.",
  },
  {
    question: "Qual a duração da mentoria?",
    answer: "A mentoria tem um formato intensivo pensado para gerar resultados rápidos. Clique no botão de inscrição para ver todos os detalhes e o cronograma atual.",
  },
  {
    question: "Como posso me inscrever?",
    answer: "Você pode se inscrever clicando em qualquer botão de 'Garantir Vaga' nesta página. O pagamento é processado de forma segura pela Kiwify.",
  },
];

const FAQSection = () => {
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
            Dúvidas Frequentes
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Perguntas <span className="text-gold-gradient">frequentes</span>
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-gold-muted/20 rounded-sm bg-surface-2/50 px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-foreground font-body font-medium text-left text-sm md:text-base hover:text-primary transition-colors py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-sm md:text-base leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
