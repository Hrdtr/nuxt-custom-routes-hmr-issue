export function useRequestTenantHandle() {
  const runtimeConfig = useRuntimeConfig();
  const baseHost = new URL(runtimeConfig.public.app.baseUrl).host.replace(
    "app.",
    ""
  );
  const { host: appHost } = new URL(runtimeConfig.public.app.baseUrl);
  const { host: requestHost } = useRequestURL();

  return computed(() =>
    appHost !== requestHost && requestHost.endsWith(`.${baseHost}`)
      ? requestHost.replace(`.${baseHost}`, "").trim()
      : null
  );
}
