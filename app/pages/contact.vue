<template>
  <div class="w-full">
    <!-- Page Header -->
    <section class="section-gradient py-16 md:py-24 relative">
      <div class="divider-line-accent mb-8"></div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 class="heading-xl mb-4">Get In Touch</h1>
        <p class="text-xl text-muted-foreground max-w-3xl">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </div>

      <div class="divider-line-accent mt-8"></div>
    </section>

    <!-- Contact Content -->
    <section class="py-20 md:py-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- Add monospace contact labels -->
          <Card
            v-for="(contact, index) in contactMethods"
            :key="contact.id"
            class="text-center industrial-card group"
          >
            <CardContent class="pt-6">
              <div class="mb-4">
                <component
                  :is="contact.icon"
                  class="w-10 h-10 text-accent mx-auto group-hover:scale-110 transition-transform"
                />
              </div>
              <p class="text-xs font-mono text-muted-foreground mb-2">
                // 0{{ index + 1 }}
              </p>
              <h3 class="font-semibold mb-2">{{ contact.title }}</h3>
              <p class="text-muted-foreground text-sm">{{ contact.value }}</p>
            </CardContent>
          </Card>
        </div>

        <!-- Contact Form -->
        <div class="max-w-2xl mx-auto">
          <Card class="industrial-card">
            <CardContent class="pt-6">
              <div class="mb-6 pb-6 border-b border-border">
                <p class="text-xs font-mono text-accent">
                  // Send us a message
                </p>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-sm font-semibold mb-2 flex items-center gap-1"
                    >
                      <span class="font-mono text-accent">#</span> Name
                    </label>
                    <Input
                      v-model="form.name"
                      type="text"
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-sm font-semibold mb-2 flex items-center gap-1"
                    >
                      <span class="font-mono text-accent">@</span> Email
                    </label>
                    <Input
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    class="block text-sm font-semibold mb-2 flex items-center gap-1"
                  >
                    <span class="font-mono text-accent">$</span> Subject
                  </label>
                  <Input
                    v-model="form.subject"
                    type="text"
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label
                    class="block text-sm font-semibold mb-2 flex items-center gap-1"
                  >
                    <span class="font-mono text-accent">»</span> Message
                  </label>
                  <textarea
                    v-model="form.message"
                    required
                    rows="6"
                    class="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <Button type="submit" class="w-full font-semibold">
                  Send Message
                </Button>
              </form>

              <Alert
                v-if="submitted"
                class="mt-4 bg-green-500/10 border-green-500/20"
              >
                <CheckCircle2 class="h-4 w-4 text-green-600" />
                <AlertTitle class="text-green-600">Success</AlertTitle>
                <AlertDescription class="text-green-600/90">
                  Thank you! We've received your message and will get back to
                  you soon.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const contactMethods = ref([
  {
    id: 1,
    icon: Mail,
    title: "Email",
    value: "hello@xmtrxi.com",
  },
  {
    id: 2,
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Address",
    value: "San Francisco, CA 94105",
  },
]);

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitted = ref(false);

const handleSubmit = () => {
  submitted.value = true;
  form.value = { name: "", email: "", subject: "", message: "" };
  setTimeout(() => {
    submitted.value = false;
  }, 5000);
};
</script>
