// composables/useFavorites.ts
export function useFavorites() {
  const favorites = useCookie<number[]>("favorites", {
    default: () => [],
  });

  function isFavorite(id: number) {
    return computed(() => favorites.value.includes(id));
  }

  function toggleFavorite(id: number) {
    if (favorites.value.includes(id)) {
      favorites.value = favorites.value.filter((f) => f !== id);
    } else {
      favorites.value = [...favorites.value, id];
    }
  }

  function addFavorite(id: number) {
    if (!favorites.value.includes(id)) {
      favorites.value = [...favorites.value, id];
    }
  }

  function removeFavorite(id: number) {
    favorites.value = favorites.value.filter((f) => f !== id);
  }

  function clearFavorites() {
    favorites.value = [];
  }

  const count = computed(() => favorites.value.length);
  return {
    favorites,
    count,
    isFavorite,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    clearFavorites,
  };
}
