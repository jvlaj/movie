import MovieList from "@/components/MovieList";
import Link from "next/link";
import {Suspense} from "react";

export default async function Home() {
    return (
        <>
            <Link href="/">
                <Suspense>
                    {/* @ts-expect-error Server Component */}
                    <MovieList className="" props={{}} />
                </Suspense>
            </Link>
            {/*<Link href="/movies/:id">*/}
            {/*    <MovieDetail/>*/}
            {/*</Link>*/}
        </>
    )
}