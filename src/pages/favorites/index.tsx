import { NextPage } from "next";

import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { useState } from "react";
import { pokemonsEnFavoritos } from "@/utils";


const FavoritesPage: NextPage = () => {
    const [favoritePokemons, setFavoritesPokemon] = useState<number[]>(pokemonsEnFavoritos());

    return (
        <Layout title="Pokemons - Favoritos">
            <NoFavorites />
        </Layout>
    )
}

export default FavoritesPage;