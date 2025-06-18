import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactFormSchema = insertContactMessageSchema.extend({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue lors de l'envoi du message.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Atelier",
      content: "123 Rue de l'Artisanat\n75000 Paris, France",
    },
    {
      icon: "fas fa-phone",
      title: "Téléphone",
      content: "+33 1 23 45 67 89",
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "contact@marcdubois-menuisier.fr",
    },
    {
      icon: "fas fa-clock",
      title: "Horaires",
      content: "Lun-Ven: 8h-18h\nSam: 9h-17h",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-wood-cream relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-wood-primary">
            Parlons de votre projet
          </h2>
          <p className="text-lg text-wood-secondary max-w-2xl mx-auto">
            Chaque projet est unique. Contactez-moi pour discuter de vos idées et obtenir un devis personnalisé
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 hover-lift"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-wood-secondary font-semibold">Prénom *</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre prénom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-wood-secondary font-semibold">Nom *</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-wood-secondary font-semibold">Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="votre@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-wood-secondary font-semibold">Téléphone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="01 23 45 67 89" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-wood-secondary font-semibold">Type de projet</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="mobilier">Mobilier sur mesure</SelectItem>
                          <SelectItem value="cuisine">Cuisine</SelectItem>
                          <SelectItem value="amenagement">Aménagement</SelectItem>
                          <SelectItem value="escalier">Escalier</SelectItem>
                          <SelectItem value="renovation">Rénovation</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-wood-secondary font-semibold">Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Décrivez votre projet en détail..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-wood-accent hover:bg-wood-copper text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {contactMutation.isPending ? (
                    <i className="fas fa-spinner fa-spin mr-2" />
                  ) : (
                    <i className="fas fa-paper-plane mr-2" />
                  )}
                  {contactMutation.isPending ? "Envoi en cours..." : "Envoyer ma demande"}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover-lift"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-wood-accent/10 rounded-full p-4">
                    <i className={`${info.icon} text-2xl text-wood-accent`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-primary mb-1">{info.title}</h3>
                    <p className="text-wood-secondary whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gray-200 rounded-2xl h-64 overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                alt="Localisation de l'atelier"
                className="w-full h-full object-cover hover-lift"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
