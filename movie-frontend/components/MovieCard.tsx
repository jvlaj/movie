import {Movie} from '@/types'
import clsx from 'clsx'
import * as React from "react";
import Link from "next/link";
import {Score} from "@/components/Score";
import Image from "next/image";
import {getMovieThumbnail} from "@/lib/util";

interface MovieCardProps extends React.HTMLAttributes<HTMLDivElement> {
    movie: Movie,
    className?: string,
    props?: any
}


const MovieCard = ({movie, className, ...props}: MovieCardProps) => (
    <Link
        href={`/movies/${movie.id}`}
        className={clsx(
            "relative border-4 border-black transition-all bg-black bg-opacity-70 rounded-lg overflow-hidden lg:transform lg:hover:scale-110 lg:hover:bg-opacity-100 lg:hover:shadow-2xl"
        )}
    >
        <Image
            src={getMovieThumbnail(movie.poster_path)}
            width={400}
            height={400}
            alt=""
            className="transition-transform duration-500 ease-in-out opacity-60"
        />
        <div
            className={clsx(
                "absolute inset-0 p-4 flex flex-col justify-between text-white " + className
            )}
            {...props}
        >
            <div>
                <h2 className={clsx(
                    "text-xl py-2 leading-5 tracking-tighter font-semibold text-shadow"
                )}>
                    {movie.title}
                </h2>
                <p className={clsx(
                    "text-sm py-2 leading-relaxed tracking-tight text-shadow"
                )}>
                    {movie.overview}
                </p>
            </div>
            <Score
                className={clsx("self-start")}
                movieScore={movie.vote_average}
            />
        </div>
    </Link>
);

export {MovieCard}