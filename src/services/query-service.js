const queryService = {
    search: async ({ query }) => {
        if (!query) return [];

        const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
        const API_URL = import.meta.env.VITE_API_BASE_URL;

        try {
            const response = await fetch(
                `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
                    query
                )}&include_adult=false&language=es-MX&page=1`
            );

            const data = await response.json();
            const { results } = data;
            return results;
        } catch (error) {
            console.error("Error fetching search results:", error);
            throw new Error("Error fetching search results");
        }
    }
};
export default queryService;