import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'file://E:/Moi/MOI/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'file://E:/Moi/MOI/node_modules/vue/server-renderer/index.mjs';
import { b as useRuntimeConfig } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseH4",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const props = __props;
    const { headings } = useRuntimeConfig().public.mdc;
    const generate = computed(() => {
      var _a;
      return props.id && (typeof (headings == null ? void 0 : headings.anchorLinks) === "boolean" && (headings == null ? void 0 : headings.anchorLinks) === true || typeof (headings == null ? void 0 : headings.anchorLinks) === "object" && ((_a = headings == null ? void 0 : headings.anchorLinks) == null ? void 0 : _a.h4));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h4${ssrRenderAttrs(mergeProps({
        id: props.id
      }, _attrs))}>`);
      if (props.id && unref(generate)) {
        _push(`<a${ssrRenderAttr("href", `#${props.id}`)}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h4>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseH4-ZnJvSDoK.mjs.map
