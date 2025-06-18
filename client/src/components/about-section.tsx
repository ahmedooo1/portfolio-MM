import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "200+", label: "Projets réalisés" },
    { number: "100%", label: "Sur mesure" },
  ];

  return (
    <section id="apropos" className="py-20 bg-wood-cream" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-8 text-wood-primary">
              Passion & Savoir-faire
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              Depuis plus de 15 ans, je transforme le bois brut en créations uniques qui allient tradition et modernité.
              Chaque projet est une nouvelle aventure, un défi technique et artistique que j'aborde avec passion et précision.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Mon atelier, situé au cœur de la région, est équipé des outils les plus modernes tout en conservant
              les techniques ancestrales de la menuiserie française. Cette alliance du traditionnel et du contemporain
              me permet de réaliser des pièces d'exception.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-wood-accent mb-2">{stat.number}</div>
                  <div className="text-sm text-wood-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Marc Dubois dans son atelier"
              className="rounded-2xl shadow-2xl w-full hover-lift"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-wood-accent p-6 rounded-2xl shadow-xl"
            >
              <i className="fas fa-tools text-3xl text-white"></i>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
