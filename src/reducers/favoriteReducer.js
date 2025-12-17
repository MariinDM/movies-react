export const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

export const updateLocalStorage = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

export const favoriteReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_FAVORITE": {
            const { id } = payload;

            const newMovie = state.findIndex((movie) => movie.id === id);
            if (newMovie !== -1) return state;

            const updatedFavorites = [...state, payload];
            updateLocalStorage(updatedFavorites);
            return updatedFavorites;
        }
        case "REMOVE_FAVORITE": {
            const updatedFavorites = state.filter((movie) => movie.id !== payload);
            updateLocalStorage(updatedFavorites);
            return updatedFavorites;
        }
        case "CLEAR_FAVORITES":
            updateLocalStorage([]);
            return [];
        default:
            return state;
    }
};