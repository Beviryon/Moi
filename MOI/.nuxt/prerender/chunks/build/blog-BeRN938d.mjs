import { _ as _sfc_main$1 } from './Icon-CPeZLWXG.mjs';
import { defineComponent, ref, withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'file://E:/Moi/MOI/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'file://E:/Moi/MOI/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './server.mjs';
import { q as queryContent } from './query-BlOO9W2B.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file://E:/Moi/MOI/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://E:/Moi/MOI/node_modules/h3/dist/index.mjs';
import 'file://E:/Moi/MOI/node_modules/ufo/dist/index.mjs';
import 'file://E:/Moi/MOI/node_modules/unified/index.js';
import 'file://E:/Moi/MOI/node_modules/remark-parse/index.js';
import 'file://E:/Moi/MOI/node_modules/remark-rehype/index.js';
import 'file://E:/Moi/MOI/node_modules/remark-mdc/dist/index.mjs';
import 'file://E:/Moi/MOI/node_modules/defu/dist/defu.mjs';
import 'file://E:/Moi/MOI/node_modules/remark-gfm/index.js';
import 'file://E:/Moi/MOI/node_modules/rehype-external-links/index.js';
import 'file://E:/Moi/MOI/node_modules/rehype-sort-attribute-values/index.js';
import 'file://E:/Moi/MOI/node_modules/rehype-sort-attributes/index.js';
import 'file://E:/Moi/MOI/node_modules/rehype-raw/index.js';
import 'file://E:/Moi/MOI/node_modules/detab/index.js';
import 'file://E:/Moi/MOI/node_modules/scule/dist/index.mjs';
import 'file://E:/Moi/MOI/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://E:/Moi/MOI/node_modules/hast-util-to-string/index.js';
import 'file://E:/Moi/MOI/node_modules/github-slugger/index.js';
import 'file://E:/Moi/MOI/node_modules/destr/dist/index.mjs';
import 'file://E:/Moi/MOI/node_modules/hookable/dist/index.mjs';
import 'file://E:/Moi/MOI/node_modules/node-mock-http/dist/index.mjs';
import 'file://E:/Moi/MOI/node_modules/klona/dist/index.mjs';
import 'file://E:/Moi/MOI/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/Moi/MOI/node_modules/pathe/dist/index.mjs';
import 'file://E:/Moi/MOI/node_modules/unstorage/dist/index.mjs';
import 'file://E:/Moi/MOI/node_modules/unstorage/drivers/fs.mjs';
import 'file:///E:/Moi/MOI/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://E:/Moi/MOI/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/Moi/MOI/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file://E:/Moi/MOI/node_modules/unctx/dist/index.mjs';
import 'file://E:/Moi/MOI/node_modules/vue-router/dist/vue-router.node.mjs';
import '../_/renderer.mjs';
import 'file://E:/Moi/MOI/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/Moi/MOI/node_modules/nuxt/node_modules/unhead/dist/server.mjs';
import 'file://E:/Moi/MOI/node_modules/devalue/index.js';
import 'file://E:/Moi/MOI/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';
import 'file://E:/Moi/MOI/node_modules/nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file://E:/Moi/MOI/node_modules/nuxt/node_modules/pathe/dist/index.mjs';
import 'file://E:/Moi/MOI/node_modules/ohash/dist/index.mjs';
import './preview-zozblLuR.mjs';
import 'file://E:/Moi/MOI/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://E:/Moi/MOI/node_modules/nuxt/node_modules/ohash/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blog",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const translations = {
      fr: {
        blog: "Blog",
        blogDescription: "Pens\xE9es, tutoriels et insights sur le d\xE9veloppement web moderne",
        noPostsYet: "Aucun article pour le moment",
        checkBackSoon: "Revenez bient\xF4t pour du nouveau contenu !",
        stayUpdated: "Restez inform\xE9",
        newsletterDescription: "Soyez notifi\xE9 quand je publie de nouveaux articles sur le d\xE9veloppement web, Vue.js et les technologies modernes.",
        subscribe: "S'abonner"
      },
      en: {
        blog: "Blog",
        blogDescription: "Thoughts, tutorials, and insights about modern web development",
        noPostsYet: "No posts yet",
        checkBackSoon: "Check back soon for new content!",
        stayUpdated: "Stay Updated",
        newsletterDescription: "Get notified when I publish new articles about web development, Vue.js, and modern technologies.",
        subscribe: "Subscribe"
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
    ref();
    ref();
    ref();
    ref();
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => queryContent("/blog").sort({ date: -1 }).find()), __temp = await __temp, __restore(), __temp);
    const featuredPost = computed(() => (posts == null ? void 0 : posts[0]) || null);
    const regularPosts = computed(() => (posts == null ? void 0 : posts.slice(1)) || []);
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const calculateReadingTime = (post) => {
      var _a, _b;
      const wordsPerMinute = 200;
      const wordCount = ((_b = (_a = post.body) == null ? void 0 : _a.children) == null ? void 0 : _b.reduce((count, child) => {
        var _a2, _b2, _c, _d;
        if (child.type === "element" && child.tag === "p") {
          return count + (((_d = (_c = (_b2 = (_a2 = child.children) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.value) == null ? void 0 : _c.split(" ")) == null ? void 0 : _d.length) || 0);
        }
        return count;
      }, 0)) || 0;
      return Math.ceil(wordCount / wordsPerMinute) || 5;
    };
    useHead({
      title: "Blog - Beviryon Issanga Ngoulou",
      meta: [
        { name: "description", content: "Read the latest thoughts, tutorials, and insights about modern web development from Beviryon Issanga Ngoulou" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 dark:bg-gray-900/30 light:bg-gray-50/50 white:bg-white/50" }, _attrs))} data-v-e6781bde><div class="max-w-6xl mx-auto" data-v-e6781bde><div class="text-center mb-16" data-v-e6781bde><h1 class="text-4xl sm:text-5xl font-display font-bold gradient-text mb-4" data-v-e6781bde>${ssrInterpolate(t("blog"))}</h1><p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 text-lg max-w-2xl mx-auto" data-v-e6781bde>${ssrInterpolate(t("blogDescription"))}</p></div><div class="mb-16" data-v-e6781bde>`);
      if (unref(featuredPost)) {
        _push(`<div class="card card-hover group cursor-pointer" data-v-e6781bde><div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-e6781bde><div class="relative overflow-hidden rounded-lg" data-v-e6781bde><div class="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center" data-v-e6781bde>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:document-text",
          class: "w-16 h-16 text-primary-400"
        }, null, _parent));
        _push(`</div><div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" data-v-e6781bde>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:arrow-right",
          class: "w-12 h-12 text-white transform group-hover:translate-x-2 transition-transform duration-200"
        }, null, _parent));
        _push(`</div></div><div class="flex flex-col justify-center" data-v-e6781bde><div class="flex flex-wrap gap-2 mb-4" data-v-e6781bde><!--[-->`);
        ssrRenderList(unref(featuredPost).tags, (tag) => {
          _push(`<span class="px-3 py-1 bg-primary-600/20 text-primary-300 text-sm rounded-full" data-v-e6781bde>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div><h2 class="text-2xl sm:text-3xl font-display font-bold text-gray-200 dark:text-gray-200 light:text-gray-800 white:text-gray-800 group-hover:text-white dark:group-hover:text-white light:group-hover:text-gray-900 white:group-hover:text-gray-900 transition-colors duration-300 mb-4" data-v-e6781bde>${ssrInterpolate(unref(featuredPost).title)}</h2><p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 text-lg mb-6 line-clamp-4" data-v-e6781bde>${ssrInterpolate(unref(featuredPost).description)}</p><div class="flex items-center justify-between" data-v-e6781bde><div class="flex items-center space-x-4 text-sm text-gray-500" data-v-e6781bde><span data-v-e6781bde>${ssrInterpolate(formatDate(unref(featuredPost).date))}</span><span data-v-e6781bde>\u2022</span><span data-v-e6781bde>${ssrInterpolate(unref(featuredPost).author)}</span><span data-v-e6781bde>\u2022</span><span data-v-e6781bde>${ssrInterpolate(calculateReadingTime(unref(featuredPost)))} min read</span></div>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:arrow-right",
          class: "w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform duration-200"
        }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-e6781bde><!--[-->`);
      ssrRenderList(unref(regularPosts), (post) => {
        _push(`<article class="card card-hover group cursor-pointer" data-v-e6781bde><div class="relative overflow-hidden rounded-lg mb-4" data-v-e6781bde><div class="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center" data-v-e6781bde>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:document-text",
          class: "w-12 h-12 text-primary-400"
        }, null, _parent));
        _push(`</div><div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" data-v-e6781bde>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:arrow-right",
          class: "w-8 h-8 text-white transform group-hover:translate-x-1 transition-transform duration-200"
        }, null, _parent));
        _push(`</div></div><div data-v-e6781bde><div class="flex flex-wrap gap-2 mb-3" data-v-e6781bde><!--[-->`);
        ssrRenderList(post.tags, (tag) => {
          _push(`<span class="px-2 py-1 bg-primary-600/20 text-primary-300 text-xs rounded-full" data-v-e6781bde>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div><h2 class="font-semibold text-gray-200 dark:text-gray-200 light:text-gray-800 white:text-gray-800 group-hover:text-white dark:group-hover:text-white light:group-hover:text-gray-900 white:group-hover:text-gray-900 transition-colors duration-300 mb-2 line-clamp-2" data-v-e6781bde>${ssrInterpolate(post.title)}</h2><p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 text-sm mb-4 line-clamp-3" data-v-e6781bde>${ssrInterpolate(post.description)}</p><div class="flex items-center justify-between text-xs text-gray-500" data-v-e6781bde><span data-v-e6781bde>${ssrInterpolate(formatDate(post.date))}</span><span data-v-e6781bde>${ssrInterpolate(calculateReadingTime(post))} min read</span></div></div></article>`);
      });
      _push(`<!--]--></div>`);
      if (!unref(posts) || unref(posts).length === 0) {
        _push(`<div class="text-center py-16" data-v-e6781bde>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:document-text",
          class: "w-16 h-16 text-gray-600 dark:text-gray-600 light:text-gray-400 white:text-gray-400 mx-auto mb-4"
        }, null, _parent));
        _push(`<h3 class="text-xl font-semibold text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 mb-2" data-v-e6781bde>${ssrInterpolate(t("noPostsYet"))}</h3><p class="text-gray-500 dark:text-gray-500 light:text-gray-500 white:text-gray-500" data-v-e6781bde>${ssrInterpolate(t("checkBackSoon"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-20" data-v-e6781bde><div class="card text-center" data-v-e6781bde><div class="max-w-2xl mx-auto" data-v-e6781bde>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:envelope",
        class: "w-12 h-12 text-primary-400 mx-auto mb-4"
      }, null, _parent));
      _push(`<h3 class="text-2xl font-display font-bold text-gray-200 dark:text-gray-200 light:text-gray-800 white:text-gray-800 mb-4" data-v-e6781bde>${ssrInterpolate(t("stayUpdated"))}</h3><p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 mb-6" data-v-e6781bde>${ssrInterpolate(t("newsletterDescription"))}</p><div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" data-v-e6781bde><input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-400" data-v-e6781bde><button class="btn-primary whitespace-nowrap" data-v-e6781bde>${ssrInterpolate(t("subscribe"))}</button></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6781bde"]]);

export { blog as default };
//# sourceMappingURL=blog-BeRN938d.mjs.map
