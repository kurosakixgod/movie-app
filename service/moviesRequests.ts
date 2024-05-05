class MovieService {
	async getAllMovies() {
		const res = await fetch(
			`https://kinopoiskapiunofficial.tech/api/v2.2/films`,
			{
				method: "GET",
				headers: {
					"X-API-KEY": "0e3a3cff-f024-41b6-9860-a89006e524ff",
					"Content-Type": "application/json",
				},
			},
		);
		const data = await res.json();
		console.log(data);

		const validData = {
			...data,
			items: data.items.filter((item: any) => item.nameRu),
		};
		return validData;
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new MovieService();
