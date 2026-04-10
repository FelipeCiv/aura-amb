import { Instagram } from "lucide-react";
import ambLogo from "@/assets/amb-logo.png";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-gold-muted/20">
      <div className="container px-6">
        <div className="flex flex-col items-center gap-6">
          <img src={ambLogo} alt="AMB" className="w-24 opacity-60" />
          <a
            href="https://instagram.com/_emersonrf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body"
          >
            <Instagram className="w-4 h-4" />
            @_emersonrf
          </a>
          <p className="text-muted-foreground/40 text-xs font-body">
            © {new Date().getFullYear()} Mentoria AMB. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
