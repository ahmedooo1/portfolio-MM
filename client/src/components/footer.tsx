import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const navigationLinks = [
    { name: "Accueil", id: "accueil" },
    { name: "À Propos", id: "apropos" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-linkedin", href: "#" },
  ];

  return (
    <footer className="bg-wood-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="font-heading font-bold text-2xl mb-4">
              <i className="fas fa-hammer mr-2" />
              Marc Dubois
            </div>
            <p className="text-white/70 mb-4">
              Artisan menuisier passionné, créateur de mobilier sur mesure et d'aménagements d'exception.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(218, 165, 32, 0.3)" }}
                  className="bg-wood-accent/20 hover:bg-wood-accent/30 rounded-full p-3 transition-colors"
                >
                  <i className={`${social.icon} text-xl`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-white/70">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <motion.a
                    whileHover={{ color: "var(--wood-accent)", x: 5 }}
                    className="cursor-pointer transition-colors"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-white/70">
              <p>
                <i className="fas fa-map-marker-alt mr-2" />
                123 Rue de l'Artisanat, Paris
              </p>
              <p>
                <i className="fas fa-phone mr-2" />
                +33 1 23 45 67 89
              </p>
              <p>
                <i className="fas fa-envelope mr-2" />
                contact@marcdubois-menuisier.fr
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-8 pt-8 text-center text-white/50"
        >
          <p>&copy; 2024 Marc Dubois - Menuisier. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
}
