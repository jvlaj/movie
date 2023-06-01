import {Suspense} from "react";
import Link from "next/link";
import clsx from "clsx";
import * as React from "react";
import {Movie, Actor} from "@/types";
import {Score} from "@/components/Score";
import {ActorCard} from "@/components/ActorCard";

interface MovieDetailProps extends React.HTMLAttributes<HTMLDivElement> {
    movie: Movie,
    className?: string,
    props?: any
}

const MovieDetail = ({movie, className, ...props}: MovieDetailProps) => (
    <div className={clsx("container bg-slate-200 border-slate-400 m-4 p-16 border-4 dark:bg-slate-800", className)} {...props}>
        <h2 className={clsx("justify-start text-3xl py-2 leading-[1] tracking-tighter")}>{movie.title}</h2>
        <div className="grid grid-cols-2 justify-items-end p-8">
            <p className={clsx("py-2 justify-start")}>{movie.overview}</p>
            <Score className={clsx("py-2")} movieScore={movie.vote_average}/>
        </div>
        {movie.actors && Array.isArray(movie.actors) && movie.actors.map((actor) => (
            <div className="p-16 m-4" key={actor.id}><ActorCard actor={actor}/></div>))}
    </div>
)

export default MovieDetail
