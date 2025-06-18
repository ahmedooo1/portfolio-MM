import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg" : "bg-white/90"
      } backdrop-blur-md`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-heading font-bold text-2xl text-wood-primary cursor-pointer"
            onClick={() => scrollToSection("accueil")}
          >
            <i className="fas fa-hammer mr-2"></i>
            Marc Dubois
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Accueil", id: "accueil" },
              { name: "À Propos", id: "apropos" },
              { name: "Portfolio", id: "portfolio" },
              { name: "Services", id: "services" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <motion.a
                key={item.id}
                whileHover={{ color: "var(--wood-accent)" }}
                className="cursor-pointer transition-colors duration-300"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl text-wood-primary`}></i>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg rounded-lg mt-4 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-4">
                {[
                  { name: "Accueil", id: "accueil" },
                  { name: "À Propos", id: "apropos" },
                  { name: "Portfolio", id: "portfolio" },
                  { name: "Services", id: "services" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <motion.a
                    key={item.id}
                    whileHover={{ x: 10, color: "var(--wood-accent)" }}
                    className="block cursor-pointer transition-colors"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
