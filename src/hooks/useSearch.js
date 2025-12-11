import { useEffect, useRef, useState } from "react";

export function useSearch() {
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = search === "";
            return;
        }

        if (search === "") {
            setError("El campo de búsqueda no puede estar vacío.");
            return;
        }

        if (search.match(/^\d+$/)) {
            setError("La búsqueda no puede contener solo números.");
            return;
        }

        if (search.length < 3) {
            setError("La búsqueda debe tener al menos 3 caracteres.");
            return;
        }

        setError(null);
    }, [search]);

    return { search, setSearch, error };
}