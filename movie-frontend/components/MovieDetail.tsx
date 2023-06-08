import {Suspense} from "react";
import Link from "next/link";
import clsx from "clsx";
import * as React from "react";
import {Movie, Actor} from "@/types";
import {Score} from "@/components/Score";
import {ActorCard} from "@/components/ActorCard";
import Image from "next/image";

interface MovieDetailProps extends React.HTMLAttributes<HTMLDivElement> {
    movie: Movie,
    className?: string,
    props?: any
}

const MovieDetail: React.FC<MovieDetailProps> = ({movie}) => (
    <div className="border-4 border-slate-600 shadow-2xl transition-all p-4">
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={500}
                    height={700}
                />
            </div>
            <div className="w-full md:w-1/2 p-4">
                <h2 className="text-4xl font-bold mb-2">{movie.title}</h2>
                <h4 className="text-xl font-bold">Release Date: {movie.release_date}</h4>
                <h4 className="text-xl font-bold"> {movie.vote_average ?
                    <div>
                        <span className="text-xl font-bold">Rating: {Math.floor(movie.vote_average)}</span>
                        <Score
                            className={clsx("self-start")}
                            movieScore={movie.vote_average}/>
                    </div>
                    : null} </h4>
                    <p className="mt-4">{movie.overview}</p>
            </div>
        </div>
    </div>

//
// <div
//     className={clsx("container bg-slate-200 border-slate-400 m-4 p-16 border-4 dark:bg-slate-800", className)} {...props}>
//     // <h2 className={clsx("justify-start text-3xl py-2 leading-[1] tracking-tighter")}>{movie.title}</h2>
//     // <div className="grid grid-cols-2 justify-items-end p-8">
//     // <p className={clsx("py-2 justify-start")}>{movie.overview}</p>
//     // <Score className={clsx("py-2")} movieScore={movie.vote_average}/>
//     // </div>
//     // {movie.actors && Array.isArray(movie.actors) && movie.actors.map((actor) => (
// //         <div className="p-16 m-4" key={actor.id}><ActorCard actor={actor}/></div>))}
// // </div>
)

    export default MovieDetail
