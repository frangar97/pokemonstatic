import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { pokeapi } from "@/api";
import { PokemonFull } from "@/interfaces";
import { Layout } from "@/components/layouts";

type props = {
    pokemon: PokemonFull
}

const PokemonDetail: NextPage<props> = ({ pokemon }) => {
    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: 5 }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: 30 }}>
                        <Card.Body>
                            <Card.Image src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"} alt={pokemon.name} width="100%" height="200px" />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
                            <Text h1 transform="capitalize">{pokemon.name}</Text>
                            <Button color="gradient" ghost>Guardar en favoritos</Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites</Text>
                            <Container direction="row" display="flex" gap={0}>
                                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    const paths = [...Array(151)].map((e, index) => ({ params: { id: (index + 1).toString() } }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string };
    const request = await pokeapi.get<PokemonFull>(`/pokemon/${id}`);
    const pokemon = request.data;

    return {
        props: {
            pokemon
        }
    }
}

export default PokemonDetail;