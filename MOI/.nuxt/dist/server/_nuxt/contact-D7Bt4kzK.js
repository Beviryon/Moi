import { _ as __nuxt_component_0 } from "./nuxt-link-B07ieoq9.js";
import { _ as _sfc_main$1 } from "./Icon-CPeZLWXG.js";
import { defineComponent, ref, reactive, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "E:/Moi/MOI/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "E:/Moi/MOI/node_modules/hookable/dist/index.mjs";
import "E:/Moi/MOI/node_modules/unctx/dist/index.mjs";
import "E:/Moi/MOI/node_modules/h3/dist/index.mjs";
import "vue-router";
import "E:/Moi/MOI/node_modules/radix3/dist/index.mjs";
import "E:/Moi/MOI/node_modules/defu/dist/defu.mjs";
import "E:/Moi/MOI/node_modules/klona/dist/index.mjs";
import "E:/Moi/MOI/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    ref();
    ref();
    const form = reactive({
      name: "",
      email: "",
      subject: "",
      message: "",
      gdprConsent: false
    });
    const isSubmitting = ref(false);
    const showSuccess = ref(false);
    const errors = reactive({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const socialLinks = [
      { name: "GitHub", href: "https://github.com/beviryon", icon: "heroicons:code-bracket" },
      { name: "LinkedIn", href: "https://linkedin.com/in/beviryon", icon: "heroicons:user-group" },
      { name: "Twitter", href: "https://twitter.com/beviryon", icon: "heroicons:chat-bubble-left-right" },
      { name: "Email", href: "mailto:contact@beviryon.dev", icon: "heroicons:envelope" }
    ];
    useHead({
      title: "Contact - Beviryon Issanga Ngoulou",
      meta: [
        { name: "description", content: "Get in touch with Beviryon Issanga Ngoulou for your next web development project. Available for collaborations and consultations." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen py-20 px-4 sm:px-6 lg:px-8" }, _attrs))}><div class="max-w-4xl mx-auto"><div class="text-center mb-16"><h1 class="text-4xl sm:text-5xl font-display font-bold gradient-text mb-4"> Get In Touch </h1><p class="text-gray-400 text-lg max-w-2xl mx-auto"> Have a project in mind or want to collaborate? I&#39;d love to hear from you. Send me a message and I&#39;ll respond as soon as possible. </p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-12"><div class="card"><h2 class="text-2xl font-display font-bold text-gray-200 mb-6"> Send a Message </h2><form class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-300 mb-2"> Name * </label><input id="name"${ssrRenderAttr("value", unref(form).name)} type="text" required placeholder="Your full name" class="${ssrRenderClass([{ "ring-2 ring-red-500": unref(errors).name }, "w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-400"])}">`);
      if (unref(errors).name) {
        _push(`<p class="mt-1 text-sm text-red-400">${ssrInterpolate(unref(errors).name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="email" class="block text-sm font-medium text-gray-300 mb-2"> Email * </label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" required placeholder="your.email@example.com" class="${ssrRenderClass([{ "ring-2 ring-red-500": unref(errors).email }, "w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-400"])}">`);
      if (unref(errors).email) {
        _push(`<p class="mt-1 text-sm text-red-400">${ssrInterpolate(unref(errors).email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="subject" class="block text-sm font-medium text-gray-300 mb-2"> Subject * </label><input id="subject"${ssrRenderAttr("value", unref(form).subject)} type="text" required placeholder="What&#39;s this about?" class="${ssrRenderClass([{ "ring-2 ring-red-500": unref(errors).subject }, "w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-400"])}">`);
      if (unref(errors).subject) {
        _push(`<p class="mt-1 text-sm text-red-400">${ssrInterpolate(unref(errors).subject)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="message" class="block text-sm font-medium text-gray-300 mb-2"> Message * </label><textarea id="message" required rows="6" placeholder="Tell me about your project or idea..." class="${ssrRenderClass([{ "ring-2 ring-red-500": unref(errors).message }, "w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-400 resize-none"])}">${ssrInterpolate(unref(form).message)}</textarea>`);
      if (unref(errors).message) {
        _push(`<p class="mt-1 text-sm text-red-400">${ssrInterpolate(unref(errors).message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-start space-x-3"><input id="gdpr-consent"${ssrIncludeBooleanAttr(Array.isArray(unref(form).gdprConsent) ? ssrLooseContain(unref(form).gdprConsent, null) : unref(form).gdprConsent) ? " checked" : ""} type="checkbox" required class="mt-1 w-4 h-4 text-primary-600 bg-gray-800 border-gray-600 rounded focus:ring-primary-500 focus:ring-2"><label for="gdpr-consent" class="text-sm text-gray-300"> I agree to the processing of my personal data in accordance with the `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "text-primary-400 hover:text-primary-300 transition-colors duration-200"
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
      _push(` * </label></div><button type="submit"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">`);
      if (!unref(isSubmitting)) {
        _push(`<span>Send Message</span>`);
      } else {
        _push(`<span class="flex items-center space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:arrow-path",
          class: "w-4 h-4 animate-spin"
        }, null, _parent));
        _push(`<span>Sending...</span></span>`);
      }
      _push(`</button></form>`);
      if (unref(showSuccess)) {
        _push(`<div class="mt-6 p-4 bg-green-600/20 border border-green-600/50 rounded-lg"><div class="flex items-center space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:check-circle",
          class: "w-5 h-5 text-green-400"
        }, null, _parent));
        _push(`<p class="text-green-300">Message sent successfully! I&#39;ll get back to you soon.</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-8"><div class="card"><h3 class="text-xl font-display font-bold text-gray-200 mb-6"> Contact Information </h3><div class="space-y-4"><div class="flex items-center space-x-4"><div class="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:envelope",
        class: "w-6 h-6 text-primary-400"
      }, null, _parent));
      _push(`</div><div><p class="text-sm text-gray-400">Email</p><a href="mailto:viryon.ngoulou@gmail.com" class="text-gray-200 hover:text-primary-400 transition-colors duration-200"> viryon.ngoulou@gmail.com </a></div></div><div class="flex items-center space-x-4"><div class="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:map-pin",
        class: "w-6 h-6 text-primary-400"
      }, null, _parent));
      _push(`</div><div><p class="text-sm text-gray-400">Location</p><p class="text-gray-200">Paris, Île-de-France</p></div></div><div class="flex items-center space-x-4"><div class="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:clock",
        class: "w-6 h-6 text-primary-400"
      }, null, _parent));
      _push(`</div><div><p class="text-sm text-gray-400">Response Time</p><p class="text-gray-200">Usually within 24 hours</p></div></div></div></div><div class="card"><h3 class="text-xl font-display font-bold text-gray-200 mb-6"> Connect With Me </h3><div class="grid grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(socialLinks, (social) => {
        _push(`<a${ssrRenderAttr("href", social.href)} target="_blank" rel="noopener noreferrer" class="flex items-center space-x-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-200 group">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: social.icon,
          class: "w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-200"
        }, null, _parent));
        _push(`<span class="text-gray-300 group-hover:text-white transition-colors duration-200">${ssrInterpolate(social.name)}</span></a>`);
      });
      _push(`<!--]--></div></div><div class="card"><h3 class="text-xl font-display font-bold text-gray-200 mb-6"> Availability </h3><div class="space-y-4"><div class="flex items-center space-x-3"><div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div><span class="text-gray-300">Available for new projects</span></div><p class="text-gray-400 text-sm"> I&#39;m currently accepting new projects and collaborations. Whether you need a full-stack application, a website redesign, or technical consultation, I&#39;m here to help. </p></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-D7Bt4kzK.js.map
