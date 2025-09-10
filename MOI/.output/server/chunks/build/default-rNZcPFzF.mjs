import { _ as __nuxt_component_0 } from './nuxt-link-B07ieoq9.mjs';
import { _ as _sfc_main$3 } from './Icon-CPeZLWXG.mjs';
import { defineComponent, ref, computed, watch, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, readonly, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { a as useRoute } from './server.mjs';
import '../_/nitro.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CookieConsent",
  __ssrInlineRender: true,
  emits: ["accept", "reject"],
  setup(__props) {
    const translations = {
      fr: {
        cookieConsent: "Consentement aux cookies",
        cookieDescription: "Nous utilisons des cookies pour am\xE9liorer votre exp\xE9rience. En continuant \xE0 naviguer, vous acceptez notre utilisation des cookies. Consultez notre",
        privacyPolicy: "Politique de confidentialit\xE9",
        rejectAll: "Tout refuser",
        acceptAll: "Tout accepter"
      },
      en: {
        cookieConsent: "Cookie Consent",
        cookieDescription: "We use cookies to improve your experience. By continuing to browse, you accept our use of cookies. See our",
        privacyPolicy: "Privacy Policy",
        rejectAll: "Reject All",
        acceptAll: "Accept All"
      }
    };
    const getCurrentLocale = () => {
      return "fr";
    };
    const currentLocale = ref(getCurrentLocale());
    const t = (key) => {
      var _a;
      const locale = currentLocale.value;
      return ((_a = translations[locale]) == null ? void 0 : _a[key]) || translations.en[key] || key;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-0 left-0 right-0 z-50 p-4" }, _attrs))}><div class="max-w-4xl mx-auto"><div class="glass rounded-xl p-6 border border-gray-700/50"><div class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6"><div class="flex-shrink-0"><div class="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:shield-check",
        class: "w-6 h-6 text-primary-400"
      }, null, _parent));
      _push(`</div></div><div class="flex-1"><h3 class="font-semibold text-gray-200 mb-2">${ssrInterpolate(t("cookieConsent"))}</h3><p class="text-gray-400 text-sm leading-relaxed">${ssrInterpolate(t("cookieDescription"))} `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "text-primary-400 hover:text-primary-300 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(t("privacyPolicy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(t("privacyPolicy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </p></div><div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full md:w-auto"><button class="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-200">${ssrInterpolate(t("rejectAll"))}</button><button class="btn-primary text-sm">${ssrInterpolate(t("acceptAll"))}</button></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieConsent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CVAssistant",
  __ssrInlineRender: true,
  setup(__props) {
    const translations = {
      fr: {
        assistantTitle: "Assistant CV",
        assistantPlaceholder: "Posez-moi une question...",
        assistantQuickSkills: "Comp\xE9tences",
        assistantQuickProjects: "Projets",
        assistantQuickExperience: "Exp\xE9rience",
        assistantQuickEducation: "Formation",
        assistantQuickContact: "Contact",
        assistantQuickBlog: "Blog",
        assistantWelcome: "Bonjour ! Je suis votre assistant CV. Comment puis-je vous aider ?",
        assistantGreeting: "Salut !",
        assistantIntroduction: "Je suis votre assistant personnel pour explorer mon portfolio. Que souhaitez-vous d\xE9couvrir en premier ?",
        assistantMenuOptions: "Voici toutes les options disponibles :",
        assistantWhatFirst: "Que voulez-vous voir en premier ?",
        assistantNavigating: "Navigation vers",
        assistantResponseSkills: "Voici mes comp\xE9tences techniques et les technologies que je ma\xEEtrise.",
        assistantResponseProjects: "D\xE9couvrez mes projets r\xE9cents et mes r\xE9alisations.",
        assistantResponseExperience: "Voici mon parcours professionnel et mes exp\xE9riences.",
        assistantResponseContact: "Vous pouvez me contacter via le formulaire de contact.",
        assistantResponseEducation: "Voici mon parcours acad\xE9mique et mes certifications.",
        assistantResponseBlog: "Consultez mes articles et tutoriels sur le d\xE9veloppement web.",
        assistantResponseAbout: "Je suis Beviryon, d\xE9veloppeur fullstack passionn\xE9 par les technologies modernes.",
        assistantResponseDefault: "Je peux vous aider \xE0 naviguer dans mon portfolio. Que souhaitez-vous voir ?"
      },
      en: {
        assistantTitle: "CV Assistant",
        assistantPlaceholder: "Ask me a question...",
        assistantQuickSkills: "Skills",
        assistantQuickProjects: "Projects",
        assistantQuickExperience: "Experience",
        assistantQuickEducation: "Education",
        assistantQuickContact: "Contact",
        assistantQuickBlog: "Blog",
        assistantWelcome: "Hello! I'm your CV assistant. How can I help you?",
        assistantGreeting: "Hi there!",
        assistantIntroduction: "I'm your personal assistant to explore my portfolio. What would you like to discover first?",
        assistantMenuOptions: "Here are all the available options:",
        assistantWhatFirst: "What would you like to see first?",
        assistantNavigating: "Navigating to",
        assistantResponseSkills: "Here are my technical skills and the technologies I master.",
        assistantResponseProjects: "Discover my recent projects and achievements.",
        assistantResponseExperience: "Here is my professional journey and experiences.",
        assistantResponseContact: "You can contact me via the contact form.",
        assistantResponseEducation: "Here is my academic journey and certifications.",
        assistantResponseBlog: "Check out my articles and tutorials on web development.",
        assistantResponseAbout: "I'm Beviryon, a fullstack developer passionate about modern technologies.",
        assistantResponseDefault: "I can help you navigate my portfolio. What would you like to see?"
      }
    };
    const getCurrentLocale = () => {
      return "fr";
    };
    const currentLocale = ref(getCurrentLocale());
    const t = (key) => {
      var _a;
      const locale = currentLocale.value;
      return ((_a = translations[locale]) == null ? void 0 : _a[key]) || translations.en[key] || key;
    };
    const isOpen = ref(false);
    const isTyping = ref(false);
    const hasNewMessage = ref(false);
    const inputMessage = ref("");
    const messages = ref([]);
    ref();
    const showQuickActions = ref(true);
    const showWelcomePopup = ref(false);
    ref(false);
    const quickActions = computed(() => [
      { id: "skills", text: t("assistantQuickSkills"), action: "skills" },
      { id: "projects", text: t("assistantQuickProjects"), action: "projects" },
      { id: "experience", text: t("assistantQuickExperience"), action: "experience" },
      { id: "education", text: t("assistantQuickEducation"), action: "education" },
      { id: "blog", text: t("assistantQuickBlog"), action: "blog" },
      { id: "contact", text: t("assistantQuickContact"), action: "contact" }
    ]);
    const getSectionIcon = (section) => {
      const icons = {
        "skills": "heroicons:code-bracket",
        "projects": "heroicons:rocket-launch",
        "experience": "heroicons:briefcase",
        "education": "heroicons:academic-cap",
        "blog": "heroicons:document-text",
        "contact": "heroicons:envelope"
      };
      return icons[section] || "heroicons:star";
    };
    const formatTime = (date) => {
      return date.toLocaleTimeString(currentLocale.value === "fr" ? "fr-FR" : "en-US", {
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$3;
      _push(`<!--[-->`);
      if (unref(showWelcomePopup)) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"><div class="w-full max-w-md mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"><div class="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white"><div class="flex items-center justify-between"><div class="flex items-center space-x-3"><div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:sparkles",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</div><div><h2 class="text-xl font-bold">${ssrInterpolate(t("welcomePopupTitle"))}</h2><p class="text-sm opacity-90">${ssrInterpolate(t("welcomePopupSubtitle"))}</p></div></div><button class="p-2 hover:bg-white/20 rounded-full transition-colors duration-200">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:x-mark",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</button></div></div><div class="p-6"><p class="text-gray-600 dark:text-gray-300 mb-6 text-center">${ssrInterpolate(t("welcomePopupMessage"))}</p><div class="space-y-3"><h3 class="font-semibold text-gray-800 dark:text-gray-200 mb-3">${ssrInterpolate(t("welcomePopupChoose"))}</h3><!--[-->`);
        ssrRenderList(unref(quickActions), (action) => {
          _push(`<button class="w-full p-3 text-left bg-gray-50 dark:bg-gray-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-300 dark:hover:border-primary-600 border border-gray-200 dark:border-gray-600 rounded-lg transition-all duration-200 group"><div class="flex items-center space-x-3"><div class="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors duration-200">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: getSectionIcon(action.action),
            class: "w-4 h-4 text-primary-600 dark:text-primary-400"
          }, null, _parent));
          _push(`</div><div><p class="font-medium text-gray-800 dark:text-gray-200">${ssrInterpolate(action.text)}</p><p class="text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(t(`welcomePopupDesc${action.action.charAt(0).toUpperCase() + action.action.slice(1)}`))}</p></div></div></button>`);
        });
        _push(`<!--]--></div><div class="mt-6 text-center"><button class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">${ssrInterpolate(t("welcomePopupSkip"))}</button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="fixed bottom-4 right-4 z-50">`);
      if (!unref(isOpen)) {
        _push(`<button class="w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 transform">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: unref(isTyping) ? "heroicons:chat-bubble-left-ellipsis" : "heroicons:chat-bubble-left-right",
          class: "w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200"
        }, null, _parent));
        if (unref(hasNewMessage)) {
          _push(`<div class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(hasNewMessage)) {
          _push(`<div class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isOpen)) {
        _push(`<div class="w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-600 flex flex-col overflow-hidden"><div class="bg-gradient-to-r from-primary-500 to-secondary-500 p-4 text-white"><div class="flex items-center justify-between"><div class="flex items-center space-x-3"><div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:user",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</div><div><h3 class="font-semibold">${ssrInterpolate(t("assistantTitle"))}</h3><p class="text-xs opacity-90">${ssrInterpolate(t("assistantSubtitle"))}</p></div></div><button class="p-1 hover:bg-white/20 rounded-full transition-colors duration-200">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:x-mark",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</button></div></div><div class="flex-1 overflow-y-auto p-4 space-y-4"><!--[-->`);
        ssrRenderList(unref(messages), (message) => {
          _push(`<div class="${ssrRenderClass([message.type === "user" ? "justify-end" : "justify-start", "flex"])}"><div class="${ssrRenderClass([message.type === "user" ? "bg-primary-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100", "max-w-[80%] p-3 rounded-2xl"])}"><p class="text-sm">${ssrInterpolate(message.text)}</p><p class="text-xs opacity-70 mt-1">${ssrInterpolate(formatTime(message.timestamp))}</p></div></div>`);
        });
        _push(`<!--]-->`);
        if (unref(isTyping)) {
          _push(`<div class="flex justify-start"><div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl"><div class="flex space-x-1"><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}"></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}"></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(showQuickActions)) {
          _push(`<div class="p-3 border-t border-gray-200 dark:border-gray-600"><div class="grid grid-cols-2 gap-2"><!--[-->`);
          ssrRenderList(unref(quickActions), (action) => {
            _push(`<button class="p-2 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition-colors duration-200 hover:scale-105 transform">${ssrInterpolate(action.text)}</button>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="p-4 border-t border-gray-200 dark:border-gray-600"><div class="flex space-x-2"><input${ssrRenderAttr("value", unref(inputMessage))}${ssrRenderAttr("placeholder", t("assistantPlaceholder"))} class="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"><button${ssrIncludeBooleanAttr(!unref(inputMessage).trim()) ? " disabled" : ""} class="p-2 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white rounded-lg transition-all duration-200 hover:scale-105 transform disabled:transform-none">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:paper-airplane",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CVAssistant.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useTheme = () => {
  const theme = ref("dark");
  const toggleTheme = () => {
    if (theme.value === "dark") {
      theme.value = "light";
    } else if (theme.value === "light") {
      theme.value = "white";
    } else {
      theme.value = "dark";
    }
  };
  const setTheme = (newTheme) => {
    theme.value = newTheme;
  };
  return {
    theme: readonly(theme),
    toggleTheme,
    setTheme
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme } = useTheme();
    const mobileMenuOpen = ref(false);
    const showCookieBanner = ref(false);
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const navigationTranslations = {
      fr: {
        home: "Accueil",
        skills: "Comp\xE9tences",
        projects: "Projets",
        experience: "Exp\xE9rience",
        education: "Formation",
        blog: "Blog",
        contact: "Contact"
      },
      en: {
        home: "Home",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        blog: "Blog",
        contact: "Contact"
      }
    };
    const getCurrentLocale = () => {
      return "fr";
    };
    const currentLocale = ref(getCurrentLocale());
    const t = (key) => {
      var _a;
      const locale = currentLocale.value;
      return ((_a = navigationTranslations[locale]) == null ? void 0 : _a[key]) || navigationTranslations.en[key] || key;
    };
    const navigation = computed(() => [
      { name: t("home"), href: "/" },
      { name: t("skills"), href: "/#skills" },
      { name: t("projects"), href: "/#projects" },
      { name: t("experience"), href: "/#experience" },
      { name: t("education"), href: "/#education" },
      { name: t("blog"), href: "/blog" },
      { name: t("contact"), href: "/contact" }
    ]);
    const socialLinks = [
      { name: "GitHub", href: "https://github.com/Beviryon", icon: "heroicons:code-bracket" },
      { name: "Portfolio", href: "https://portfolio-beviryon.vercel.app/", icon: "heroicons:globe-alt" },
      { name: "Email", href: "mailto:viryon.ngoulou@gmail.com", icon: "heroicons:envelope" },
      { name: "T\xE9l\xE9phone", href: "tel:0763217791", icon: "heroicons:phone" }
    ];
    const acceptCookies = () => {
    };
    const rejectCookies = () => {
    };
    watch(() => useRoute().path, () => {
      mobileMenuOpen.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = _sfc_main$3;
      const _component_CookieConsent = _sfc_main$2;
      const _component_CVAssistant = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-900 text-gray-100 transition-colors duration-300" }, _attrs))}><nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 dark:bg-gray-900/95 light:bg-white/95 white:bg-white/95 backdrop-blur-md border-b border-gray-700/50 light:border-gray-200/50 white:border-gray-200/50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center h-16">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center space-x-2 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center"${_scopeId}><span class="text-white font-bold text-sm"${_scopeId}>B</span></div><span class="font-display font-bold text-xl gradient-text"${_scopeId}>Beviryon</span>`);
          } else {
            return [
              createVNode("div", { class: "w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center" }, [
                createVNode("span", { class: "text-white font-bold text-sm" }, "B")
              ]),
              createVNode("span", { class: "font-display font-bold text-xl gradient-text" }, "Beviryon")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center space-x-8"><!--[-->`);
      ssrRenderList(unref(navigation), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: item.href,
          class: "text-gray-200 dark:text-primary-300 light:text-gray-700 white:text-gray-800 hover:text-primary-400 transition-colors duration-200 relative group font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)} <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name) + " ", 1),
                createVNode("span", { class: "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full" })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex items-center space-x-2"><div class="relative"><select${ssrRenderAttr("value", unref(currentLocale))} class="p-2 rounded-lg bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-100/50 white:bg-gray-100/50 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 light:hover:bg-gray-200/50 white:hover:bg-gray-200/50 transition-colors duration-200 text-gray-200 dark:text-primary-300 light:text-gray-700 white:text-gray-800 text-sm border-none outline-none cursor-pointer"><option value="fr">FR</option><option value="en">EN</option></select></div><div class="relative"><select${ssrRenderAttr("value", unref(theme))} class="p-2 rounded-lg bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-100/50 white:bg-gray-100/50 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 light:hover:bg-gray-200/50 white:hover:bg-gray-200/50 transition-colors duration-200 text-gray-200 dark:text-primary-300 light:text-gray-700 white:text-gray-800 text-sm border-none outline-none cursor-pointer"><option value="dark">\u{1F319}</option><option value="light">\u2600\uFE0F</option><option value="white">\u26AA</option></select></div><button class="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(mobileMenuOpen) ? "heroicons:x-mark" : "heroicons:bars-3",
        class: "w-5 h-5 text-gray-200 dark:text-primary-300 light:text-gray-700 white:text-gray-800"
      }, null, _parent));
      _push(`</button></div></div></div><div style="${ssrRenderStyle(unref(mobileMenuOpen) ? null : { display: "none" })}" class="md:hidden bg-gray-900/95 dark:bg-gray-900/95 light:bg-white/95 white:bg-white/95 backdrop-blur-md border-t border-gray-700/50 light:border-gray-200/50 white:border-gray-200/50"><div class="px-4 py-4 space-y-2"><!--[-->`);
      ssrRenderList(unref(navigation), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: item.href,
          onClick: ($event) => mobileMenuOpen.value = false,
          class: "block px-3 py-2 text-gray-200 dark:text-primary-300 light:text-gray-700 white:text-gray-800 hover:text-primary-400 hover:bg-gray-800/50 dark:hover:bg-gray-800/50 light:hover:bg-gray-100/50 white:hover:bg-gray-100/50 rounded-lg transition-colors duration-200 font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></nav><main class="pt-16">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-gray-800/50 border-t border-gray-700/50 mt-20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="space-y-4"><div class="flex items-center space-x-2"><div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center"><span class="text-white font-bold text-sm">B</span></div><span class="font-display font-bold text-xl gradient-text">Beviryon Issanga Ngoulou</span></div><p class="text-gray-400 dark:text-gray-300 text-sm"> Fullstack Developer passionate about creating amazing web experiences with modern technologies. </p></div><div class="space-y-4"><h3 class="font-semibold text-gray-200 dark:text-primary-300">Quick Links</h3><div class="space-y-2"><!--[-->`);
      ssrRenderList(unref(navigation), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: item.href,
          class: "block text-gray-400 dark:text-primary-400 hover:text-primary-400 transition-colors duration-200 text-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="space-y-4"><h3 class="font-semibold text-gray-200 dark:text-primary-300">Connect</h3><div class="flex space-x-4"><!--[-->`);
      ssrRenderList(socialLinks, (social) => {
        _push(`<a${ssrRenderAttr("href", social.href)} target="_blank" rel="noopener noreferrer" class="p-2 bg-gray-700/50 hover:bg-primary-600 rounded-lg transition-colors duration-200 group"${ssrRenderAttr("title", social.name)}>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: social.icon,
          class: "w-5 h-5 text-gray-400 dark:text-primary-400 group-hover:text-white transition-colors duration-200"
        }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div></div></div><div class="border-t border-gray-700/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"><p class="text-gray-400 dark:text-gray-300 text-sm"> \xA9 ${ssrInterpolate(unref(currentYear))} Beviryon Issanga Ngoulou. All rights reserved. </p><div class="flex space-x-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "text-gray-400 dark:text-primary-400 hover:text-primary-400 transition-colors duration-200 text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Privacy Policy `);
          } else {
            return [
              createTextVNode(" Privacy Policy ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "text-gray-400 dark:text-primary-400 hover:text-primary-400 transition-colors duration-200 text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></footer>`);
      if (unref(showCookieBanner)) {
        _push(ssrRenderComponent(_component_CookieConsent, {
          onAccept: acceptCookies,
          onReject: rejectCookies
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_CVAssistant, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-rNZcPFzF.mjs.map
