<template>
  <div class="w-full">
    <!-- Page Header -->
    <section class="section-gradient py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="heading-xl mb-4">Frequently Asked Questions</h1>
        <p class="text-xl text-muted-foreground max-w-3xl">
          Find answers to common questions about our services, products, and
          company.
        </p>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="py-20 md:py-32">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div class="space-y-4">
          <!-- Using shadcn Accordion component for FAQ -->
          <Accordion type="single" collapsible class="w-full">
            <AccordionItem
              v-for="(item, index) in faqs"
              :key="index"
              :value="`item-${index}`"
            >
              <AccordionTrigger class="hover:text-accent transition-colors">{{
                item.question
              }}</AccordionTrigger>
              <AccordionContent class="text-muted-foreground leading-relaxed">
                {{ item.answer }}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <!-- Contact CTA -->
        <Card class="mt-16 bg-secondary/30">
          <CardContent class="pt-6 text-center">
            <h3 class="heading-md mb-4">Didn't find your answer?</h3>
            <p class="text-muted-foreground mb-6">
              If you have a question that isn't answered here, please don't
              hesitate to reach out to us.
            </p>
            <Button as-child>
              <NuxtLink to="/contact">Contact Us</NuxtLink>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = ref([
  {
    question: "What services does xmtrxi offer?",
    answer:
      "xmtrxi provides comprehensive technology solutions including custom software development, mobile applications, digital transformation, data analytics, security consulting, and strategic technology consulting. We work with businesses of all sizes to deliver tailored solutions that drive growth and innovation.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope, complexity, and requirements. A simple web application might take 2-3 months, while more complex systems could take 6-12 months or longer. We provide detailed timelines and milestones during the planning phase.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we provide comprehensive support packages including maintenance, bug fixes, performance optimization, and feature enhancements. We offer various service level agreements (SLAs) to match your business needs.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile development methodology with regular sprints, continuous communication, and iterative delivery. Our process includes discovery, planning, design, development, testing, deployment, and ongoing support.",
  },
  {
    question: "Can you integrate with existing systems?",
    answer:
      "Absolutely. We specialize in integrating new solutions with existing systems and legacy applications. Our team has experience with various platforms and APIs to ensure smooth integration.",
  },
  {
    question: "How do you handle data security?",
    answer:
      "Security is a top priority. We implement industry best practices including encryption, secure authentication, regular security audits, compliance with standards like HIPAA and GDPR, and robust data protection protocols.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with a wide range of modern technologies including Vue.js, React, Node.js, Python, Go, PostgreSQL, MongoDB, AWS, Azure, and many others. We choose the best technology stack for each project.",
  },
  {
    question: "How do I get started with xmtrxi?",
    answer:
      "Simply reach out through our contact page or email us at hello@xmtrxi.com. We'll schedule a consultation to understand your needs, discuss solutions, and provide a proposal.",
  },
]);
</script>
