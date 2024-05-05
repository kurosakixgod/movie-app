import { Movie } from "@/types/movies";
import Image from "next/image";

const MovieItem = ({
	kinopoiskId: id,
	nameRu: name,
	posterUrlPreview,
}: Movie) => {
	return (
		<li className="flex flex-col gap-[15px] w-[200px]" key={id}>
			<Image
				src={posterUrlPreview}
				alt={name}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				width={200}
				height={300}
				style={{ height: "300px" }}
			/>
			<div className="text-white">{name}</div>
		</li>
	);
};

export default MovieItem;
