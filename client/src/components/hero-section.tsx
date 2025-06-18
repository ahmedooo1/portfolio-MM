import { motion } from "framer-motion";
import WaveSvg from "./wave-svg";

export default function HeroSection() {
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

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-wood-dark/80 to-wood-primary/60" />

      {/* Geometric Shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-wood-accent/20 rotate-45"
      />
      <motion.div
        animate={{
          x: [0, 5, -5, 0],
          y: [0, -5, -10, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 right-16 w-16 h-16 bg-wood-copper/30 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [12, 17, 12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-wood-accent/40 transform rotate-12"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading font-bold text-5xl md:text-7xl mb-6 leading-tight"
        >
          Artisan
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-wood-accent block"
          >
            Menuisier
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light"
        >
          Créateur de mobilier sur mesure et d'aménagements intérieurs d'exception depuis plus de 15 ans
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("portfolio")}
            className="bg-wood-accent hover:bg-wood-copper text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
          >
            Découvrir mes créations
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="border-2 border-white text-white hover:bg-white hover:text-wood-primary px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            Me contacter
          </motion.button>
        </motion.div>
      </div>

      {/* Wave Shape */}
      <WaveSvg />
    </section>
  );
}
