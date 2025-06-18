import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: "fas fa-couch",
      title: "Mobilier Sur Mesure",
      description: "Tables, armoires, commodes et tout mobilier personnalisé selon vos besoins",
    },
    {
      icon: "fas fa-kitchen-set",
      title: "Cuisines",
      description: "Conception complète de cuisines modernes et fonctionnelles",
    },
    {
      icon: "fas fa-door-open",
      title: "Portes & Fenêtres",
      description: "Installation et rénovation de menuiseries extérieures",
    },
    {
      icon: "fas fa-stairs",
      title: "Escaliers",
      description: "Escaliers droits, tournants ou hélicoïdaux sur mesure",
    },
    {
      icon: "fas fa-home",
      title: "Aménagement",
      description: "Optimisation d'espaces et aménagements intérieurs complets",
    },
    {
      icon: "fas fa-tools",
      title: "Rénovation",
      description: "Restauration et rénovation de mobilier ancien",
    },
  ];

  return (
    <section id="services" className="py-20 bg-wood-secondary relative overflow-hidden" ref={ref}>
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-wood-accent/10 rounded-full -translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-wood-copper/10 rounded-full translate-x-40 translate-y-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-white">
            Mes Services
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            De la conception à l'installation, je vous accompagne dans tous vos projets de menuiserie
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 text-center hover-lift group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-wood-accent/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-wood-accent/30 transition-colors"
              >
                <i className={`${service.icon} text-3xl text-wood-accent`} />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
