import { c as buildAssetsURL } from '../_/nitro.mjs';
import { _ as _sfc_main$1 } from './Icon-CPeZLWXG.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-B07ieoq9.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _imports_0 = "" + buildAssetsURL("moi.B87wAJtY.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const translations = {
      fr: {
        greeting: "Salut, je suis",
        name: "Beviryon Issanga Ngoulou",
        title: "D\xE9veloppeur Fullstack",
        description: "Passionn\xE9 par la cr\xE9ation d'exp\xE9riences web modernes et performantes",
        viewProjects: "Voir mes projets",
        contactMe: "Me contacter",
        scrollDown: "D\xE9filer vers le bas",
        skillsTitle: "Comp\xE9tences & Technologies",
        skillsDescription: "Technologies et outils que j'utilise pour cr\xE9er des applications exceptionnelles",
        showMore: "Voir plus",
        showLess: "Voir moins",
        projectsTitle: "Projets R\xE9cents",
        projectsDescription: "Quelques-uns de mes projets r\xE9cents qui d\xE9montrent mes comp\xE9tences",
        experienceTitle: "Exp\xE9rience Professionnelle",
        experienceDescription: "Mon parcours professionnel et les d\xE9fis que j'ai relev\xE9s",
        educationTitle: "Formation & Certifications",
        educationDescription: "Mon parcours acad\xE9mique et mes certifications professionnelles"
      },
      en: {
        greeting: "Hi, I'm",
        name: "Beviryon Issanga Ngoulou",
        title: "Fullstack Developer",
        description: "Passionate about creating modern and performant web experiences",
        viewProjects: "View my projects",
        contactMe: "Contact me",
        scrollDown: "Scroll down",
        skillsTitle: "Skills & Technologies",
        skillsDescription: "Technologies and tools I use to create exceptional applications",
        showMore: "Show more",
        showLess: "Show less",
        projectsTitle: "Recent Projects",
        projectsDescription: "Some of my recent projects that showcase my skills",
        experienceTitle: "Professional Experience",
        experienceDescription: "My professional journey and the challenges I've tackled",
        educationTitle: "Education & Certifications",
        educationDescription: "My academic journey and professional certifications"
      }
    };
    const t = (key) => {
      var _a;
      const locale = currentLocale.value;
      return ((_a = translations[locale]) == null ? void 0 : _a[key]) || translations.en[key] || key;
    };
    ref();
    ref();
    ref();
    ref();
    ref();
    ref();
    ref();
    ref();
    ref();
    ref();
    ref();
    ref();
    ref();
    ref();
    ref();
    ref();
    const skills = [
      { name: "HTML5", icon: "heroicons:code-bracket", level: "Expert" },
      { name: "CSS3", icon: "heroicons:paint-brush", level: "Expert" },
      { name: "JavaScript", icon: "heroicons:code-bracket", level: "Expert" },
      { name: "Vue.js", icon: "heroicons:cube", level: "Intermediate" },
      { name: "React.js", icon: "heroicons:cube", level: "Advanced" },
      { name: "Angular", icon: "heroicons:cube", level: "D\xE9butant" },
      { name: "Node.js", icon: "heroicons:server", level: "Advanced" },
      { name: "PHP", icon: "heroicons:wrench-screwdriver", level: "Intermediate" },
      { name: "Python", icon: "heroicons:wrench-screwdriver", level: "Intermediate" },
      { name: "SQL", icon: "heroicons:circle-stack", level: "Intermediate" },
      { name: "Git", icon: "heroicons:code-branch", level: "Expert" },
      { name: "Docker", icon: "heroicons:swatch", level: "Intermediate" }
    ];
    const showAllSkills = ref(false);
    const visibleSkills = computed(() => {
      return skills.slice(0, 4);
    });
    const additionalSkills = computed(() => {
      return skills.slice(4);
    });
    const showAllProjects = ref(false);
    const visibleProjects = computed(() => {
      return projects.slice(0, 3);
    });
    const additionalProjects = computed(() => {
      return projects.slice(3);
    });
    const projects = [
      {
        id: 1,
        title: "Site Agence Immobili\xE8re MVB",
        description: "Plateforme compl\xE8te pour une agence immobili\xE8re avec interface moderne, navigation intuitive et fonctionnalit\xE9s PWA. Design professionnel avec section h\xE9ro, popup d'installation mobile et gestion compl\xE8te des biens immobiliers.",
        technologies: ["Next.js", "TypeScript", "Strapi", "PWA", "Responsive Design"],
        github: "https://github.com/beviryon",
        demo: "https://mvb-site.vercel.app/",
        image: "/projects/mvb-immobilier.jpg"
      },
      {
        id: 2,
        title: "FlexBeat - Association Sportive",
        description: "Site web moderne pour une association sportive \xE0 Brazzaville sp\xE9cialis\xE9e dans le fitness, activit\xE9s culturelles et cardio plein air. Interface intuitive avec fonctionnalit\xE9s PWA et design responsive.",
        technologies: ["Vue.js", "TypeScript", "TailwindCSS", "PWA", "Vercel"],
        github: "https://github.com/beviryon",
        demo: "https://flexbeat.vercel.app/",
        image: "/projects/flexbeat.png"
      },
      {
        id: 3,
        title: "Trevixia - Solutions Digitales",
        description: "Site web corporate pour une entreprise sp\xE9cialis\xE9e dans les solutions digitales et l'automatisation pour PME. Interface moderne avec d\xE9grad\xE9 purple/blue, simulateur de devis et chat widget int\xE9gr\xE9.",
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "Chat Widget", "Responsive Design"],
        github: "https://github.com/beviryon",
        demo: "https://trevixia-web.netlify.app/",
        image: "/projects/trevixia.png"
      },
      {
        id: 4,
        title: "Trevixia Formation - Plateforme LMS",
        description: "Plateforme de formation compl\xE8te avec gestion des utilisateurs, cours interactifs, suivi des notes et planning. Interface moderne avec authentification s\xE9curis\xE9e pour \xE9tudiants et administrateurs.",
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "Authentication", "Database", "JSON", "Vercel"],
        github: "https://github.com/beviryon",
        demo: "https://formation-trevixia-7wye.vercel.app/login",
        image: "/projects/trevixia-formation.png"
      },
      {
        id: 5,
        title: "Site E-commerce",
        description: "Plateforme e-commerce compl\xE8te avec panier, paiement et gestion des commandes",
        technologies: ["HTML5", "CSS3", "Firebase", "Node.js", "Express", "Sequelize", "SQL"],
        github: "https://github.com/beviryon",
        demo: "https://ryonv.com",
        image: "/projects/ecommerce.png"
      },
      {
        id: 6,
        title: "Site Autofacturation",
        description: "Application web pour la gestion et g\xE9n\xE9ration automatique de factures",
        technologies: ["React.js", "Node.js", "Express", "Sequelize", "SQL"],
        github: "https://github.com/beviryon",
        demo: "https://github.com/Beviryon",
        image: "/projects/autofacturation.png"
      },
      {
        id: 7,
        title: "Gestion R\xE9clamations GEXSI",
        description: "Projet entreprise : Extraction et transformation de donn\xE9es avec Talend",
        technologies: ["SQL", "Talend", "Excel", "ETL"],
        github: "https://github.com/beviryon",
        demo: "https://github.com/Beviryon",
        image: "/projects/gexsi.png"
      },
      {
        id: 8,
        title: "Voir plus de projets",
        description: "D\xE9couvrez tous mes autres projets, contributions open-source et r\xE9alisations sur mon profil GitHub. Plus de 20+ projets disponibles !",
        technologies: ["GitHub", "Open Source", "Divers projets", "Contributions"],
        github: "https://github.com/beviryon",
        demo: "https://github.com/beviryon",
        image: "/projects/github-showcase.png",
        isGitHubCard: true
      }
    ];
    const experiences = [
      {
        title: "D\xE9veloppeur web en Alternance",
        company: "Eurexo sas",
        period: "Sept 2023 - Juillet 2024",
        description: "D\xE9veloppement d'applications web et participation \xE0 des projets de d\xE9veloppement",
        technologies: ["JavaScript", "Node.js", "API REST", "SQL"],
        icon: "heroicons:code-bracket"
      },
      {
        title: "Stagiaire Technicien SRS",
        company: "VNB IT",
        period: "Juin - Juillet 2022",
        description: "Stage en continuit\xE9 d'activit\xE9 et s\xE9curit\xE9 des syst\xE8mes d'information",
        technologies: ["Analyse de risques", "S\xE9curit\xE9 informatique", "Continuit\xE9 d'activit\xE9"],
        icon: "heroicons:shield-check"
      }
    ];
    const educations = [
      {
        title: "Master Tech Full Stack",
        institution: "ETNA",
        period: "2025 - 2027",
        description: "Programme destin\xE9 \xE0 former des experts capables de concevoir, piloter et s\xE9curiser des projets web. Ma\xEEtrise du d\xE9veloppement full stack avec Angular, Django, React, Node.js, Flutter, et Go.",
        skills: ["Angular", "Django", "React", "Node.js", "Flutter", "Go", "Architecture logicielle", "DevOps", "Cybers\xE9curit\xE9"],
        icon: "heroicons:academic-cap"
      },
      {
        title: "Bachelor 3 Chef de projets digitaux",
        institution: "EEMI",
        period: "2023 - 2024",
        description: "Formation en gestion de projet digital avec sp\xE9cialisation en d\xE9veloppement backend et technologies web modernes.",
        skills: ["Backend Flask", "Framework SASS", "Linux", "Docker", "Git", "Mod\xE9lisation UML"],
        icon: "heroicons:book-open"
      }
    ];
    const getCurrentLocale = () => {
      return "fr";
    };
    const currentLocale = ref(getCurrentLocale());
    computed(() => [
      t("description"),
      currentLocale.value === "fr" ? "Cr\xE9er des applications \xE9volutives" : "Creating scalable applications",
      currentLocale.value === "fr" ? "Concevoir de belles interfaces" : "Crafting beautiful user interfaces",
      currentLocale.value === "fr" ? "D\xE9velopper des syst\xE8mes backend robustes" : "Developing robust backend systems",
      currentLocale.value === "fr" ? "Optimiser les performances" : "Optimizing for performance"
    ]);
    useHead({
      title: "Beviryon Issanga Ngoulou - Fullstack Developer",
      meta: [
        { name: "description", content: "Portfolio of Beviryon Issanga Ngoulou - Expert Fullstack Developer specializing in Vue.js, AdonisJS, and modern web technologies" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen overflow-hidden" }, _attrs))}><section class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"><div class="absolute inset-0 overflow-hidden pointer-events-none"></div><div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 light:from-gray-50 light:via-gray-100 light:to-gray-50 white:from-white white:via-gray-50 white:to-white"></div><div class="absolute inset-0 bg-gradient-to-tr from-primary-900/20 via-transparent to-secondary-900/20 dark:from-primary-900/20 light:from-primary-100/20 white:from-primary-50/20"></div><div class="relative z-10 max-w-7xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="text-center lg:text-left"><div class="mb-4"><span class="text-primary-400 dark:text-primary-400 light:text-primary-600 white:text-primary-600 font-medium text-lg">${ssrInterpolate(t("greeting"))}</span></div><h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6"><span class="gradient-text">${ssrInterpolate(t("name"))}</span></h1><div class="mb-6"><h2 class="text-xl sm:text-2xl lg:text-3xl text-gray-300 dark:text-gray-300 light:text-gray-700 white:text-gray-800 font-medium">${ssrInterpolate(t("title"))}</h2></div><div class="mb-8"><div class="graduation-badge inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 dark:border-primary-500/30 light:border-primary-600/30 white:border-primary-600/30">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:academic-cap",
        class: "w-5 h-5 text-primary-400 dark:text-primary-400 light:text-primary-600 white:text-primary-600 mr-2"
      }, null, _parent));
      _push(`<span class="text-sm font-medium text-primary-300 dark:text-primary-300 light:text-primary-700 white:text-primary-700"> EEMI Graduate 2024 </span></div></div><div class="mb-8"><p class="text-lg sm:text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 min-h-[2rem]"><span class="inline-block"></span><span class="typing-cursor text-primary-400 dark:text-primary-400 light:text-primary-600 white:text-primary-600">|</span></p></div><div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#projects",
        class: "btn-primary group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(t("viewProjects"))}</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons:arrow-right",
              class: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, toDisplayString(t("viewProjects")), 1),
              createVNode(_component_Icon, {
                name: "heroicons:arrow-right",
                class: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-secondary group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(t("contactMe"))}</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons:envelope",
              class: "w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, toDisplayString(t("contactMe")), 1),
              createVNode(_component_Icon, {
                name: "heroicons:envelope",
                class: "w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex justify-center lg:justify-end"><div class="relative"><div class="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]"><div class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full opacity-20 animate-pulse"></div><div class="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full opacity-20 animate-pulse delay-1000"></div><div class="profile-float relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-500/20 dark:border-primary-500/20 light:border-primary-600/30 white:border-primary-600/30"><img${ssrRenderAttr("src", _imports_0)} alt="Beviryon Issanga Ngoulou - EEMI Graduate 2024" class="w-full h-full object-cover object-center"><div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div></div><div class="absolute top-8 -left-8 bg-white/10 dark:bg-white/10 light:bg-gray-800/10 white:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 dark:border-white/20 light:border-gray-300/20 white:border-gray-300/20"><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:code-bracket",
        class: "w-6 h-6 text-primary-400 dark:text-primary-400 light:text-primary-600 white:text-primary-600"
      }, null, _parent));
      _push(`<span class="text-sm font-medium text-white dark:text-white light:text-gray-800 white:text-gray-800">Fullstack</span></div></div><div class="absolute bottom-8 -right-8 bg-white/10 dark:bg-white/10 light:bg-gray-800/10 white:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 dark:border-white/20 light:border-gray-300/20 white:border-gray-300/20"><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:academic-cap",
        class: "w-6 h-6 text-secondary-400 dark:text-secondary-400 light:text-secondary-600 white:text-secondary-600"
      }, null, _parent));
      _push(`<span class="text-sm font-medium text-white dark:text-white light:text-gray-800 white:text-gray-800">EEMI 2024</span></div></div></div></div></div></div><div class="absolute bottom-8 left-1/2 transform -translate-x-1/2"><div class="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600"><span class="text-sm">${ssrInterpolate(t("scrollToExplore"))}</span><div class="w-6 h-10 border-2 border-gray-400 dark:border-gray-400 light:border-gray-600 white:border-gray-600 rounded-full flex justify-center"><div class="w-1 h-3 bg-gray-400 dark:bg-gray-400 light:bg-gray-600 white:bg-gray-600 rounded-full mt-2 animate-bounce"></div></div></div></div></div></section><section id="skills" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 dark:bg-gray-900/30 light:bg-gray-50/50 white:bg-white/50"><div class="max-w-7xl mx-auto"><div class="text-center mb-16"><h2 class="text-3xl sm:text-4xl font-display font-bold gradient-text mb-4">${ssrInterpolate(t("skillsTitle"))}</h2><p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 text-lg max-w-2xl mx-auto">${ssrInterpolate(t("skillsDescription"))}</p></div><div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"><!--[-->`);
      ssrRenderList(unref(visibleSkills), (skill) => {
        _push(`<div class="skill-card card card-hover group cursor-pointer"><div class="text-center"><div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: skill.icon,
          class: "w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-300"
        }, null, _parent));
        _push(`</div><h3 class="font-semibold text-gray-200 dark:text-gray-100 group-hover:text-white transition-colors duration-300">${ssrInterpolate(skill.name)}</h3><p class="text-sm text-gray-400 dark:text-gray-300 mt-1">${ssrInterpolate(skill.level)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center"><button class="btn-secondary group"><span>${ssrInterpolate(unref(showAllSkills) ? t("showLess") : t("showMore"))}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(showAllSkills) ? "heroicons:chevron-up" : "heroicons:chevron-down",
        class: "w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200"
      }, null, _parent));
      _push(`</button></div><div style="${ssrRenderStyle(unref(showAllSkills) ? null : { display: "none" })}" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"><!--[-->`);
      ssrRenderList(unref(additionalSkills), (skill) => {
        _push(`<div class="skill-card card card-hover group cursor-pointer"><div class="text-center"><div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: skill.icon,
          class: "w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-300"
        }, null, _parent));
        _push(`</div><h3 class="font-semibold text-gray-200 dark:text-gray-100 group-hover:text-white transition-colors duration-300">${ssrInterpolate(skill.name)}</h3><p class="text-sm text-gray-400 dark:text-gray-300 mt-1">${ssrInterpolate(skill.level)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100/50 white:bg-gray-50/50"><div class="max-w-7xl mx-auto"><div class="text-center mb-16"><h2 class="text-3xl sm:text-4xl font-display font-bold gradient-text mb-4">${ssrInterpolate(t("projectsTitle"))}</h2><p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 text-lg max-w-2xl mx-auto">${ssrInterpolate(t("projectsDescription"))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(visibleProjects), (project) => {
        _push(`<div class="card card-hover group"><div class="relative overflow-hidden rounded-lg mb-4">`);
        if (project.image) {
          _push(`<div class="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center"><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="w-full h-full object-cover"></div>`);
        } else {
          _push(`<div class="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "heroicons:code-bracket",
            class: "w-12 h-12 text-primary-400"
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">`);
        if (project.github) {
          _push(`<a${ssrRenderAttr("href", project.github)} target="_blank" rel="noopener noreferrer" class="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200" title="View on GitHub">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "heroicons:code-bracket",
            class: "w-5 h-5 text-white"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        if (project.demo) {
          _push(`<a${ssrRenderAttr("href", project.demo)} target="_blank" rel="noopener noreferrer" class="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200" title="View Live Demo">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "heroicons:arrow-top-right-on-square",
            class: "w-5 h-5 text-white"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div><h3 class="font-semibold text-gray-200 dark:text-gray-100 group-hover:text-white transition-colors duration-300 mb-2">${ssrInterpolate(project.title)}</h3><p class="text-gray-400 dark:text-gray-300 text-sm mb-4">${ssrInterpolate(project.description)}</p><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(project.technologies, (tech) => {
          _push(`<span class="px-2 py-1 bg-primary-600/20 text-primary-300 dark:text-primary-200 text-xs rounded-full">${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-8"><button class="btn-secondary group"><span>${ssrInterpolate(unref(showAllProjects) ? t("showLess") : t("showMore"))}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(showAllProjects) ? "heroicons:chevron-up" : "heroicons:chevron-down",
        class: "w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200"
      }, null, _parent));
      _push(`</button></div><div style="${ssrRenderStyle(unref(showAllProjects) ? null : { display: "none" })}" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"><!--[-->`);
      ssrRenderList(unref(additionalProjects), (project) => {
        _push(`<div class="${ssrRenderClass(project.isGitHubCard ? "card card-hover group cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-primary-500 transition-all duration-300" : "card card-hover group")}"><div class="relative overflow-hidden rounded-lg mb-4">`);
        if (project.image) {
          _push(`<div class="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center"><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="w-full h-full object-cover"></div>`);
        } else {
          _push(`<div class="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "heroicons:code-bracket",
            class: "w-12 h-12 text-primary-400"
          }, null, _parent));
          _push(`</div>`);
        }
        if (!project.isGitHubCard) {
          _push(`<div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">`);
          if (project.github) {
            _push(`<a${ssrRenderAttr("href", project.github)} target="_blank" rel="noopener noreferrer" class="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200" title="View on GitHub">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "heroicons:code-bracket",
              class: "w-5 h-5 text-white"
            }, null, _parent));
            _push(`</a>`);
          } else {
            _push(`<!---->`);
          }
          if (project.demo) {
            _push(`<a${ssrRenderAttr("href", project.demo)} target="_blank" rel="noopener noreferrer" class="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200" title="View Live Demo">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "heroicons:arrow-top-right-on-square",
              class: "w-5 h-5 text-white"
            }, null, _parent));
            _push(`</a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (project.isGitHubCard) {
          _push(`<div class="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><div class="text-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "heroicons:arrow-top-right-on-square",
            class: "w-8 h-8 text-white mb-2 mx-auto"
          }, null, _parent));
          _push(`<p class="text-white font-semibold">Voir sur GitHub</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><h3 class="${ssrRenderClass(project.isGitHubCard ? "font-semibold text-white group-hover:text-primary-300 transition-colors duration-300 mb-2" : "font-semibold text-gray-200 dark:text-gray-100 group-hover:text-white transition-colors duration-300 mb-2")}">${ssrInterpolate(project.title)}</h3><p class="${ssrRenderClass(project.isGitHubCard ? "text-gray-300 text-sm mb-4" : "text-gray-400 dark:text-gray-300 text-sm mb-4")}">${ssrInterpolate(project.description)}</p><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(project.technologies, (tech) => {
          _push(`<span class="${ssrRenderClass(project.isGitHubCard ? "px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full" : "px-2 py-1 bg-primary-600/20 text-primary-300 dark:text-primary-200 text-xs rounded-full")}">${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section id="experience" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 dark:bg-gray-900/30 light:bg-gray-50/50 white:bg-white/50"><div class="max-w-4xl mx-auto"><div class="text-center mb-16"><h2 class="text-3xl sm:text-4xl font-display font-bold gradient-text mb-4">${ssrInterpolate(t("experienceTitle"))}</h2><p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 text-lg">${ssrInterpolate(t("experienceDescription"))}</p></div><div class="relative"><div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div><!--[-->`);
      ssrRenderList(experiences, (experience, index) => {
        _push(`<div class="relative flex items-start space-x-8 mb-12 last:mb-0"><div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center relative z-10">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: experience.icon,
          class: "w-6 h-6 text-white"
        }, null, _parent));
        _push(`</div><div class="flex-1 card"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2"><h3 class="font-semibold text-gray-200 dark:text-gray-100">${ssrInterpolate(experience.title)}</h3><span class="text-sm text-primary-400 dark:text-primary-300">${ssrInterpolate(experience.period)}</span></div><p class="text-primary-300 dark:text-primary-200 font-medium mb-2">${ssrInterpolate(experience.company)}</p><p class="text-gray-400 dark:text-gray-300 text-sm">${ssrInterpolate(experience.description)}</p><div class="flex flex-wrap gap-2 mt-4"><!--[-->`);
        ssrRenderList(experience.technologies, (tech) => {
          _push(`<span class="px-2 py-1 bg-gray-700/50 dark:bg-gray-600/50 text-gray-300 dark:text-gray-200 text-xs rounded-full">${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section id="education" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100/50 white:bg-gray-50/50"><div class="max-w-4xl mx-auto"><div class="text-center mb-16"><h2 class="text-3xl sm:text-4xl font-display font-bold gradient-text mb-4">${ssrInterpolate(t("educationTitle"))}</h2><p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 text-lg">${ssrInterpolate(t("educationDescription"))}</p></div><div class="relative"><div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div><!--[-->`);
      ssrRenderList(educations, (education, index) => {
        _push(`<div class="relative flex items-start space-x-8 mb-12 last:mb-0"><div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center relative z-10">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: education.icon,
          class: "w-6 h-6 text-white"
        }, null, _parent));
        _push(`</div><div class="flex-1 card"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2"><h3 class="font-semibold text-gray-200 dark:text-gray-100">${ssrInterpolate(education.title)}</h3><span class="text-sm text-primary-400 dark:text-primary-300">${ssrInterpolate(education.period)}</span></div><p class="text-primary-300 dark:text-primary-200 font-medium mb-2">${ssrInterpolate(education.institution)}</p><p class="text-gray-400 dark:text-gray-300 text-sm mb-4">${ssrInterpolate(education.description)}</p><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(education.skills, (skill) => {
          _push(`<span class="px-2 py-1 bg-gray-700/50 dark:bg-gray-600/50 text-gray-300 dark:text-gray-200 text-xs rounded-full">${ssrInterpolate(skill)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-K90d-0A3.mjs.map
