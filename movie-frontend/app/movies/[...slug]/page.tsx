import MovieDetail from "@/components/MovieDetail";
import * as React from "react";
import {notFound} from "next/navigation";

interface MovieProps {
    params: {
        slug: string
    }
}


export default async function movieDetail({params}: MovieProps) {
    const data = await getMovieFromParams(params)

    if (!data) {
        notFound();
    }

    return (
        <MovieDetail movie={data}/>
    )
}

async function getMovieFromParams(params: MovieProps["params"]) {
    const res = await fetch(`http://localhost:8000/api/movies/${params.slug}`)
    return await res.json()
}