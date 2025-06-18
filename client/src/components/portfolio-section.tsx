import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Cuisine Moderne",
      description: "Aménagement complet avec îlot central",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Table Familiale",
      description: "Chêne massif pour 8 personnes",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Bibliothèque",
      description: "Sur mesure avec éclairage intégré",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Escalier Design",
      description: "Structure bois et métal",
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Dressing",
      description: "Optimisation maximale de l'espace",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Habillage Mural",
      description: "Panneaux décoratifs en noyer",
      image: "https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white relative" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-wood-primary rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-wood-accent transform rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-wood-primary">
            Mes Créations
          </h2>
          <p className="text-lg text-wood-secondary max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations, du mobilier sur mesure aux aménagements complets
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group hover-lift"
            >
              <div className="image-overlay rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="overlay-content">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
