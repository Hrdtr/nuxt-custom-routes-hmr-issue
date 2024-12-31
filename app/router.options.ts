import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default {
  routes: (items) => {
    const requestTenantHandle = useRequestTenantHandle();
    const tenantRoutePrefix = "/__tenant/:handle()";

    if (!requestTenantHandle.value) {
      return items.filter((item) => !item.path.startsWith(tenantRoutePrefix));
    }

    return items
      .filter((item) => item.path.startsWith(tenantRoutePrefix))
      .map((item) => ({
        ...item,
        path: item.path.replace(tenantRoutePrefix, ""),
      }));
  },
} satisfies RouterConfig;
