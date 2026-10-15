<template>
  <div id="top">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent-800 focus:px-4 focus:py-2 focus:text-white"
    >
      Skip to content
    </a>

    <SiteHeader />

    <main id="main" class="mx-auto max-w-3xl px-4 sm:px-6">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CoursesSection />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { socialNetworks } from "~/data/social";

const title = "Christian Benseler — Fullstack & Frontend Developer";
const description =
  "Christian Benseler is a fullstack & frontend developer based in Lisbon, Portugal, building software for the web since 2005.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "profile",
  twitterCard: "summary",
  twitterCreator: "@chrisbenseler",
});

useHead({
  meta: [
    { name: "theme-color", content: "#ffffff", media: "(prefers-color-scheme: light)" },
    { name: "theme-color", content: "#09090b", media: "(prefers-color-scheme: dark)" },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Christian Benseler",
        jobTitle: "Fullstack & Frontend Developer",
        address: { "@type": "PostalAddress", addressLocality: "Lisbon", addressCountry: "PT" },
        sameAs: socialNetworks.map((network) => network.url),
      }),
    },
  ],
});

onMounted(() => {
  if (window.location.hostname === "localhost") return;
  const w = window as typeof window & { dataLayer: unknown[] };
  w.dataLayer = w.dataLayer || [];
  function gtag(..._args: unknown[]) {
    // gtag.js expects the arguments object itself, not an array
    w.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-Q0BYEJF81T");
});
</script>
