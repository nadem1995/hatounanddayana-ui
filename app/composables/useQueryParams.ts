export function useQueryParams() {
  const route = useRoute();
  const router = useRouter();

  function updateQuery(newParams: Record<string, any>) {
    const query = { ...route.query };

    for (const key in newParams) {
      const value = newParams[key];
      const isArray = Array.isArray(value);
      const arrayKey = `${key}[]`;

      // Remove both formats first
      delete query[key];
      delete query[arrayKey];

      if (value !== undefined && value !== null && value !== "") {
        // Use key[] for arrays, plain key for single values
        query[isArray ? arrayKey : key] = value;
      }
    }

    // Reset page when any filter changes
    delete query.page;

    router.push({ query });
  }

  function clearQuery() {
    router.push({ query: {} });
  }

  return { updateQuery, clearQuery };
}
