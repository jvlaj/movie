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
            className="mx-4 relative transition-all duration-400 rounded-2xl overflow-hidden lg:transform lg:hover:scale-110 lg:hover:shadow-2xl lg:hover:z-10 lg:hover:-translate-y-1 border-transparent lg:hover:border-gray-200 lg:border-8 ease-in-out">
            <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className={clsx("")}
                alt={movie.title}
                width={400}
                height={400}
            />
        </div>
    </Link>
);

export default MovieCard;