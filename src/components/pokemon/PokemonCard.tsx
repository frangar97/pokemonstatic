import { FC } from "react";
import { Pokemon } from "@/interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import Link from "next/link";

type props = {
    pokemon: Pokemon
}

export const PokemonCard: FC<props> = ({ pokemon }) => {
    return (
        <Grid xs={6} sm={3} md={2} xl={1}>
            <Link href={`/pokemon/${pokemon.id}`} style={{ width: "100%" }}>
                <Card isHoverable isPressable>
                    <Card.Body css={{ p: 1 }}>
                        <Card.Image src={pokemon.img} width="100%" height={140} />
                    </Card.Body>
                    <Card.Footer>
                        <Row justify="space-between">
                            <Text>{pokemon.name}</Text>
                            <Text>#{pokemon.id}</Text>
                        </Row>
                    </Card.Footer>
                </Card>
            </Link>
        </Grid>
    )
}