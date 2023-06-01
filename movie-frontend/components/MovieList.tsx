import {Movie} from "@/types"
import {MovieCard} from "@/components/MovieCard";

interface MovieListProps {
    movieList: Movie[],
    className?: string,
    props?: any,
}

const MovieList = async ({movieList, className, ...props}: MovieListProps) => {

    return (
        <div
            className="grid gap-4 shadow-2xl items-center justify-between lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
            {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    )
}

export default MovieList