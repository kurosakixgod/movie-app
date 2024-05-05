import { create } from "zustand";

interface MoviesState {
	movies: any[];
}

interface MoviesActions {
	addMovie: (movie: object) => void;
}

export const useMovies = create<MoviesActions & MoviesState>((set, get) => ({
	movies: [],
	addMovie: (movie) => set({ movies: [...get().movies, movie] }),
}));
