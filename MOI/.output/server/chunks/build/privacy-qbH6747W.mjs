import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
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

const lastUpdated = "January 15, 2024";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    ref();
    useHead({
      title: "Privacy Policy - Beviryon Issanga Ngoulou",
      meta: [
        { name: "description", content: "Privacy Policy for Beviryon Issanga Ngoulou's website. Learn how we collect, use, and protect your personal information." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen py-20 px-4 sm:px-6 lg:px-8" }, _attrs))}><div class="max-w-4xl mx-auto"><div class="text-center mb-16"><h1 class="text-4xl sm:text-5xl font-display font-bold gradient-text mb-4"> Privacy Policy </h1><p class="text-gray-400 text-lg"> Last updated: ${ssrInterpolate(lastUpdated)}</p></div><div class="prose prose-lg prose-invert max-w-none"><div class="card"><h2 class="text-2xl font-display font-bold text-gray-200 mb-6"> Introduction </h2><p class="text-gray-300 mb-6"> Beviryon Issanga Ngoulou (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;) operates the website beviryon.dev (the &quot;Service&quot;). This page informs you of my policies regarding the collection, use, and disclosure of personal data when you use my Service and the choices you have associated with that data. </p><h2 class="text-2xl font-display font-bold text-gray-200 mb-6"> Information Collection and Use </h2><p class="text-gray-300 mb-4"> I collect several different types of information for various purposes to provide and improve my Service to you. </p><h3 class="text-xl font-semibold text-gray-200 mb-4">Types of Data Collected</h3><h4 class="text-lg font-medium text-gray-200 mb-3">Personal Data</h4><p class="text-gray-300 mb-4"> While using my Service, I may ask you to provide me with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). Personally identifiable information may include, but is not limited to: </p><ul class="list-disc list-inside text-gray-300 mb-6 space-y-2"><li>Email address</li><li>First name and last name</li><li>Cookies and Usage Data</li></ul><h4 class="text-lg font-medium text-gray-200 mb-3">Usage Data</h4><p class="text-gray-300 mb-6"> I may also collect information on how the Service is accessed and used (&quot;Usage Data&quot;). This Usage Data may include information such as your computer&#39;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of my Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data. </p><h4 class="text-lg font-medium text-gray-200 mb-3">Tracking &amp; Cookies Data</h4><p class="text-gray-300 mb-4"> I use cookies and similar tracking technologies to track the activity on my Service and hold certain information. </p><p class="text-gray-300 mb-6"> Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of my Service. </p><h2 class="text-2xl font-display font-bold text-gray-200 mb-6"> Use of Data </h2><p class="text-gray-300 mb-4"> Beviryon Issanga Ngoulou uses the collected data for various purposes: </p><ul class="list-disc list-inside text-gray-300 mb-6 space-y-2"><li>To provide and maintain the Service</li><li>To notify you about changes to my Service</li><li>To allow you to participate in interactive features of my Service when you choose to do so</li><li>To provide customer care and support</li><li>To provide analysis or valuable information so that I can improve the Service</li><li>To monitor the usage of the Service</li><li>To detect, prevent and address technical issues</li></ul><h2 class="text-2xl font-display font-bold text-gray-200 mb-6"> Transfer of Data </h2><p class="text-gray-300 mb-6"> Your information, including Personal Data, may be transferred to \u2014 and maintained on \u2014 computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. </p><h2 class="text-2xl font-display font-bold text-gray-200 mb-6"> Disclosure of Data </h2><p class="text-gray-300 mb-4"> I may disclose your Personal Data in the good faith belief that such action is necessary to: </p><ul class="list-disc list-inside text-gray-300 mb-6 space-y-2"><li>To comply with a legal obligation</li><li>To protect and defend the rights or property of Beviryon Issanga Ngoulou</li><li>To prevent or investigate possible wrongdoing in connection with the Service</li><li>To protect the personal safety of users of the Service or the public</li><li>To protect against legal liability</li></ul><h2 class="text-2xl font-display font-bold text-gray-200 mb-6"> Security of Data </h2><p class="text-gray-300 mb-6"> The security of your data is important to me, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While I strive to use commercially acceptable means to protect your Personal Data, I cannot guarantee its absolute security. </p><h2 class="text-2xl font-display font-bold text-gray-200 mb-6"> Service Providers </h2><p class="text-gray-300 mb-4"> I may employ third party companies and individuals to facilitate my Service (&quot;Service Providers&quot;), to provide the Service on my behalf, to perform Service-related services or to assist me in analyzing how my Service is used. </p><p class="text-gray-300 mb-6"> These third parties have access to your Personal Data only to perform these tasks on my behalf and are obligated not to disclose or use it for any other purpose. </p><h2 class="text-2xl font-display font-bold text-gray-200 mb-6"> Links to Other Sites </h2><p class="text-gray-300 mb-6"> My Service may contain links to other sites that are not operated by me. If you click on a third party link, you will be directed to that third party&#39;s site. I strongly advise you to review the Privacy Policy of every site you visit. </p><h2 class="text-2xl font-display font-bold text-gray-200 mb-6"> Children&#39;s Privacy </h2><p class="text-gray-300 mb-6"> My Service does not address anyone under the age of 18 (&quot;Children&quot;). I do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided me with Personal Data, please contact me. </p><h2 class="text-2xl font-display font-bold text-gray-200 mb-6"> Changes to This Privacy Policy </h2><p class="text-gray-300 mb-6"> I may update my Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page. </p><h2 class="text-2xl font-display font-bold text-gray-200 mb-6"> Contact Me </h2><p class="text-gray-300 mb-4"> If you have any questions about this Privacy Policy, please contact me: </p><div class="bg-gray-800/50 rounded-lg p-6"><p class="text-gray-300 mb-2"><strong>Email:</strong><a href="mailto:contact@beviryon.dev" class="text-primary-400 hover:text-primary-300 transition-colors duration-200"> contact@beviryon.dev </a></p><p class="text-gray-300"><strong>Website:</strong><a href="https://beviryon.dev" class="text-primary-400 hover:text-primary-300 transition-colors duration-200"> https://beviryon.dev </a></p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-qbH6747W.mjs.map
