import "./chunk-HM4MQYWN.js";

// node_modules/laravel-vite-plugin/inertia-helpers/index.js
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
export {
  resolvePageComponent
};
//# sourceMappingURL=laravel-vite-plugin_inertia-helpers.js.map
