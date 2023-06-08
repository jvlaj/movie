import MovieList from "@/components/MovieList";
import Link from "next/link";
import {Suspense} from "react";
import SearchBar from "@/components/SearchBar";

export default async function Home() {
    return (
        <>
            <Suspense>
                <MovieList/>
            </Suspense>
            {/*<Link href="/movies/:id">*/}
            {/*    <MovieDetail/>*/}
            {/*</Link>*/}
        </>
    )
}