import { Container, Text } from "@nextui-org/react";

export const NoFavorites = () => {
    return (
        <Container css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            height: "calc(100vh-100px)"
        }}>
            <Text h1>No hay favoritos</Text>
        </Container>
    );
}