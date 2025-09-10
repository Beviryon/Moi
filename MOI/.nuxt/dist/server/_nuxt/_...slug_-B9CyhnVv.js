import { _ as _sfc_main$1 } from "./Icon-CPeZLWXG.js";
import _sfc_main$2 from "./ContentRenderer-D_yKMV8C.js";
import { defineComponent, ref, withAsyncContext, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { a as useRoute, u as useHead } from "../server.mjs";
import { q as queryContent } from "./query-BlOO9W2B.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ContentRendererMarkdown-tkJSdaSd.js";
import "E:/Moi/MOI/node_modules/destr/dist/index.mjs";
import "scule";
import "property-information";
import "./node-yHY0X6Y7.js";
import "./preview-zozblLuR.js";
import "E:/Moi/MOI/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "E:/Moi/MOI/node_modules/h3/dist/index.mjs";
import "E:/Moi/MOI/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "E:/Moi/MOI/node_modules/klona/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "E:/Moi/MOI/node_modules/hookable/dist/index.mjs";
import "E:/Moi/MOI/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "E:/Moi/MOI/node_modules/radix3/dist/index.mjs";
import "E:/Moi/MOI/node_modules/defu/dist/defu.mjs";
import "E:/Moi/MOI/node_modules/ufo/dist/index.mjs";
import "E:/Moi/MOI/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "E:/Moi/MOI/node_modules/ohash/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    ref();
    ref();
    ref();
    ref();
    ref();
    const route = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => queryContent(route.path).findOne()), __temp = await __temp, __restore(), __temp);
    const readingTime = computed(() => {
      const wordsPerMinute = 200;
      const wordCount = data.body?.children?.reduce((count, child) => {
        if (child.type === "element" && child.tag === "p") {
          return count + (child.children?.[0]?.value?.split(" ")?.length || 0);
        }
        return count;
      }, 0) || 0;
      return Math.ceil(wordCount / wordsPerMinute);
    });
    const { data: allPosts } = ([__temp, __restore] = withAsyncContext(() => queryContent("/blog").sort({ date: -1 }).find()), __temp = await __temp, __restore(), __temp);
    const relatedPosts = computed(() => {
      return allPosts.filter((post) => post._path !== route.path).filter((post) => post.tags?.some((tag) => data.tags?.includes(tag))).slice(0, 2);
    });
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    useHead({
      title: `${data.title} - Beviryon's Blog`,
      meta: [
        { name: "description", content: data.description },
        { property: "og:title", content: data.title },
        { property: "og:description", content: data.description },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: data.date },
        { property: "article:author", content: data.author },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: data.title },
        { name: "twitter:description", content: data.description }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = _sfc_main$1;
      const _component_ContentRenderer = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen py-20 px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-83a2906d><div class="max-w-4xl mx-auto" data-v-83a2906d><div class="mb-8" data-v-83a2906d><button class="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 group" data-v-83a2906d>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:arrow-left",
        class: "w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200"
      }, null, _parent));
      _push(`<span data-v-83a2906d>Back to Blog</span></button></div><header class="mb-12" data-v-83a2906d><div class="flex flex-wrap gap-2 mb-4" data-v-83a2906d><!--[-->`);
      ssrRenderList(unref(data).tags, (tag) => {
        _push(`<span class="px-3 py-1 bg-primary-600/20 text-primary-300 text-sm rounded-full" data-v-83a2906d>${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div><h1 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gradient-text mb-6" data-v-83a2906d>${ssrInterpolate(unref(data).title)}</h1><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 text-gray-400" data-v-83a2906d><div class="flex items-center space-x-4" data-v-83a2906d><span data-v-83a2906d>${ssrInterpolate(formatDate(unref(data).date))}</span><span data-v-83a2906d>•</span><span data-v-83a2906d>${ssrInterpolate(unref(data).author)}</span></div><div class="flex items-center space-x-2" data-v-83a2906d>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:clock",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span data-v-83a2906d>${ssrInterpolate(unref(readingTime))} min read</span></div></div></header><article class="prose prose-lg prose-invert max-w-none" data-v-83a2906d>`);
      _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(data) }, null, _parent));
      _push(`</article><footer class="mt-16 pt-8 border-t border-gray-700/50" data-v-83a2906d><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0" data-v-83a2906d><div class="flex items-center space-x-4" data-v-83a2906d><div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center" data-v-83a2906d><span class="text-white font-bold" data-v-83a2906d>B</span></div><div data-v-83a2906d><h3 class="font-semibold text-gray-200" data-v-83a2906d>${ssrInterpolate(unref(data).author)}</h3><p class="text-sm text-gray-400" data-v-83a2906d>Fullstack Developer</p></div></div><div class="flex space-x-3" data-v-83a2906d><button class="p-2 bg-gray-700/50 hover:bg-blue-600 rounded-lg transition-colors duration-200" title="Share on Twitter" data-v-83a2906d>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:chat-bubble-left-right",
        class: "w-5 h-5 text-gray-400 hover:text-white"
      }, null, _parent));
      _push(`</button><button class="p-2 bg-gray-700/50 hover:bg-blue-700 rounded-lg transition-colors duration-200" title="Share on LinkedIn" data-v-83a2906d>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:user-group",
        class: "w-5 h-5 text-gray-400 hover:text-white"
      }, null, _parent));
      _push(`</button><button class="p-2 bg-gray-700/50 hover:bg-gray-600 rounded-lg transition-colors duration-200" title="Copy Link" data-v-83a2906d>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:link",
        class: "w-5 h-5 text-gray-400 hover:text-white"
      }, null, _parent));
      _push(`</button></div></div></footer>`);
      if (unref(relatedPosts).length > 0) {
        _push(`<section class="mt-20" data-v-83a2906d><h2 class="text-2xl font-display font-bold gradient-text mb-8" data-v-83a2906d>Related Posts</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-83a2906d><!--[-->`);
        ssrRenderList(unref(relatedPosts), (post) => {
          _push(`<article class="card card-hover group cursor-pointer" data-v-83a2906d><div class="flex space-x-4" data-v-83a2906d><div class="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0" data-v-83a2906d>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "heroicons:document-text",
            class: "w-6 h-6 text-primary-400"
          }, null, _parent));
          _push(`</div><div class="flex-1" data-v-83a2906d><h3 class="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 mb-1" data-v-83a2906d>${ssrInterpolate(post.title)}</h3><p class="text-gray-400 text-sm line-clamp-2" data-v-83a2906d>${ssrInterpolate(post.description)}</p><div class="flex items-center space-x-2 mt-2 text-xs text-gray-500" data-v-83a2906d><span data-v-83a2906d>${ssrInterpolate(formatDate(post.date))}</span><span data-v-83a2906d>•</span><span data-v-83a2906d>${ssrInterpolate(post.author)}</span></div></div></div></article>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-83a2906d"]]);
export {
  ____slug_ as default
};
//# sourceMappingURL=_...slug_-B9CyhnVv.js.map
