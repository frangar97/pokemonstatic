import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from "../ui/Navbar";

type props = {
    title?: string
}

export const Layout: FC<PropsWithChildren<props>> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "PokemonApp"}</title>
                <meta name="author" content="Francisco Garcia" />
                <meta name="description" content="Información sobre el pokemon" />
                <meta name="keywords" content="pokemon, pokedex" />
            </Head>
            <Navbar />
            <main style={{ padding: "0px 20px" }}>
                {children}
            </main>
        </>
    );
}