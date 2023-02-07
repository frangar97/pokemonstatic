import { GetStaticProps, NextPage } from "next"
import { Layout } from "@/components/layouts";
import { pokeapi } from "@/api";
import { Pokemon, PokemonListResult } from "@/interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemon";

type props = {
  pokemons: Pokemon[]
}

const HomePage: NextPage<props> = ({ pokemons }) => {
  return (
    <Layout title="PokemonApp - MainPage">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(pokemon => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const request = await pokeapi.get<PokemonListResult>("/pokemon?limit=151");
  const pokemons: Pokemon[] = request.data.results.map((pokemon, index) => ({
    ...pokemon, id: index + 1, img: `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;