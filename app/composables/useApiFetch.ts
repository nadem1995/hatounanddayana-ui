export const useApiFetch = <T>(request: string, opts?: any) => {
  const config = useRuntimeConfig();
  const { locale } = useI18n();

  return useFetch<T>(request, {
    baseURL: config.public.apiBase,
    ...opts,
    watch: [locale, ...(opts?.watch || [])],
    onRequest({ options }) {
      options.headers = {
        ...options.headers,
        ...opts?.headers,
        "Accept-Language": locale.value, // ✅ always fresh value
      };
    },
  });
};
