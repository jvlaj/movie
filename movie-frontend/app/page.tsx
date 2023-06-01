import MovieList from "@/components/MovieList";
import Link from "next/link";
import MovieDetail from "@/components/MovieDetail";
import {Suspense} from "react";

export default async function Home() {
    const res = await fetch("http://localhost:8000/api/movies/discover")
    const data = await res.json()

    return (
        <>
            <Link href="/">
                <Suspense>
                    {/* @ts-expect-error Server Component */}
                    <MovieList movieList={data["results"]} />
                </Suspense>
            </Link>
            {/*<Link href="/movies/:id">*/}
            {/*    <MovieDetail/>*/}
            {/*</Link>*/}
        </>
    )
}