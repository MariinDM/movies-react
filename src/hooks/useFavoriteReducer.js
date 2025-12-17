import { useReducer } from "react";
import { favoriteReducer, initialFavorites } from "@/reducers/favoriteReducer";

export function useFavoriteReducer() {
    const [state, dispatch] = useReducer(favoriteReducer, initialFavorites);

    const addToFavorites = (movie) => {
        dispatch({ type: "ADD_FAVORITE", payload: movie });
    };
    const removeFromFavorites = (movieId) => {
        dispatch({ type: "REMOVE_FAVORITE", payload: movieId });
    };
    const clearFavorites = () => {
        dispatch({ type: "CLEAR_FAVORITES" });
    };

    return {
        favorites: state,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
    };
}