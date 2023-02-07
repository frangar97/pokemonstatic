export interface PokemonListResult {
    count: number;
    next?: string;
    previous?: string;
    results: Pokemon[];
}

export interface Pokemon {
    id: number;
    name: string;
    url: string;
    img: string;
}