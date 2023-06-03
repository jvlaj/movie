import {Movie} from '@/types'
import clsx from 'clsx'
import * as React from "react";
import Link from "next/link";
import {Score} from "@/components/Score";
import Image from "next/image";

interface MovieCardProps extends React.HTMLAttributes<HTMLDivElement> {
    movie: Movie,
    className?: string,
    props?: any
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => (
    <Link href={`/movies/${movie.id}`}
          className={clsx("")}>
        <div
            className="relative transition-all duration-400 rounded-2xl overflow-hidden lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:hover:z-10 lg:hover:-translate-y-1 border-transparent lg:hover:border-slate-200 dark:lg:hover:border-slate-800 lg:border-4 ease-in-out">
            <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className={clsx("")}
                alt={movie.title}
                width={400}
                height={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-5">
                <h2 className="text-2xl font-bold text-white">{movie.title}</h2>
                <p className="text-white">{movie.release_date}</p>
                <p className="text-white">Rating: {movie.vote_average}</p>
                {movie.vote_average ?
                    <Score
                        className={clsx("self-start")}
                        movieScore={movie.vote_average}/> : null}
            </div>
        </div>
    </Link>
);

export default MovieCard;