import { FavoriteContext } from "@/context/FavoriteContext";
import { useContext } from "react";

export const useFavoriteMovie = () => {

    const context = useContext(FavoriteContext);

    if (!context) throw new Error("useFavoriteMovie must be used within FavoriteProvider");

    return context;
}
