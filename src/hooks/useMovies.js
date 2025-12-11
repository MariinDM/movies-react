import { useRef, useState, useMemo, useCallback } from "react";
import queryService from "@/services/query-service";

export function useMovie({ query, sort }) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const previousSearch = useRef(query);

    const getMovies = useCallback(async ({ query }) => {
        if (query === previousSearch.current) return;
        try {
            setLoading(true);
            setError(null);
            previousSearch.current = query;
            const movies = await queryService.search({ query });
            setMovies(movies);
        } catch (error) {
            setError(error.message || "Error fetching movies");
        } finally {
            setLoading(false);
        }
    }, []);

    const sortedMovies = useMemo(() => {
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies;
    }, [movies, sort]);

    return { movies: sortedMovies, getMovies, error, loading };
}