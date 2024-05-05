import filmRequests from "@/service/moviesRequests";
import FilmItem from "./MovieItem";
import { Movie } from "@/types/movies";

const MoviesList = async () => {
	const data = await filmRequests.getAllMovies();
	const movies = data.items;

	return (
		<ul className="grid grid-cols-4 gap-[30px] place-items-center">
			{movies.map((item: Movie) => (
				<FilmItem key={item.kinopoiskId} {...item} />
			))}
		</ul>
	);
};

export default MoviesList;
