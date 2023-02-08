export const toggleFavorites = (id: number) => {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter(x => x !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export const existeEnFavoritos = (id: number): boolean => {
    if (typeof window === 'undefined') {
        return false;
    }

    const favorites: number[] = JSON.parse(localStorage.getItem("favorites") || '[]');
    return favorites.includes(id);
}