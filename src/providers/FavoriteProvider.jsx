import { FavoriteContext } from "@/context/FavoriteContext";
import { useFavoriteReducer } from "@/hooks/useFavoriteReducer";

export function FavoriteProvider({ children }) {
  const { favorites, addToFavorites, removeFromFavorites, clearFavorites } =
    useFavoriteReducer();

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
