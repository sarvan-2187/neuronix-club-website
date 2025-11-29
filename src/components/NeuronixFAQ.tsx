"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function NeuronixFAQ() {
  return (
    <section
      id="faq"
      className="relative w-full py-28 px-6 bg-black text-neutral-100 overflow-hidden"
    >
      {/* Gold glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-[radial-gradient(circle,#facc15_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[radial-gradient(circle,#f59e0b_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-semibold"
        >
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Questions
          </span>
        </motion.h2>
      </div>

      {/* FAQ LIST */}
      <Accordion
        type="single"
        collapsible
        className="relative max-w-3xl mx-auto space-y-4"
      >
        {/* Item 1 */}
        <AccordionItem
          value="item-1"
          className="border border-yellow-500/30 rounded-xl bg-black/40 backdrop-blur-sm shadow-[0_0_25px_rgba(250,204,21,0.1)]"
        >
          <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:text-yellow-300 transition">
            What is Neuronix?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-neutral-300 leading-relaxed">
            Neuronix is the only AI-oriented tech club at AVV Chennai. A space
            for engineers who want to explore machine intelligence, systems
            design, and future-tech innovations.
          </AccordionContent>
        </AccordionItem>

        {/* Item 2 */}
        <AccordionItem
          value="item-2"
          className="border border-yellow-500/30 rounded-xl bg-black/40 backdrop-blur-sm shadow-[0_0_25px_rgba(250,204,21,0.1)]"
        >
          <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:text-yellow-300 transition">
            Who leads Neuronix?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-neutral-300 leading-relaxed">
            The club is guided by Dr. IR Oviya and driven by
            a student-led core team passionate about AI and next-gen
            engineering.
          </AccordionContent>
        </AccordionItem>

        {/* Item 3 */}
        <AccordionItem
          value="item-3"
          className="border border-yellow-500/30 rounded-xl bg-black/40 backdrop-blur-sm shadow-[0_0_25px_rgba(250,204,21,0.1)]"
        >
          <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:text-yellow-300 transition">
            What does the club do?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-neutral-300 leading-relaxed">
            We conduct AI workshops, research sprints, project showcases,
            hackathons, and learning cohorts to help students build real
            solutions—not just theory.
          </AccordionContent>
        </AccordionItem>

        {/* Item 4 */}
        <AccordionItem
          value="item-4"
          className="border border-yellow-500/30 rounded-xl bg-black/40 backdrop-blur-sm shadow-[0_0_25px_rgba(250,204,21,0.1)]"
        >
          <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:text-yellow-300 transition">
            Can beginners join Neuronix?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-neutral-300 leading-relaxed">
            Absolutely! We welcome both beginners and advanced learners. Our
            events are designed so anyone can start from zero and grow fast.
          </AccordionContent>
        </AccordionItem>

        {/* Item 5 */}

              {/* Item 5 */}
              <AccordionItem
                  value="item-5"
                  className="border border-yellow-500/30 rounded-xl bg-black/40 backdrop-blur-sm shadow-[0_0_25px_rgba(250,204,21,0.1)]"
              >
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:text-yellow-300 transition">
                      How can I join Neuronix?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-300 leading-relaxed">
                      You can join Neuronix by filling out our official registration Google Form.
                      Once you submit it, you'll receive updates about sessions, workshops, and
                      opportunities directly from the club.
                  </AccordionContent>
              </AccordionItem>

      </Accordion>
    </section>
  );
}
