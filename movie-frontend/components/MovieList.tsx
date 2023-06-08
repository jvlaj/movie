"use client"
import React, {useCallback, useEffect, useRef, useState} from "react";
import {Movie} from "@/types"
import MovieCard from "@/components/MovieCard";
import {fetchDiscoverMovies} from "@/lib/fetchMovies";
import {node} from "prop-types";
import {NextComponentType} from "next";
import {className} from "postcss-selector-parser";
import clsx from "clsx";

interface MovieListProps {
    className?: string,
    props?: any,
}


const MovieList = () => {

    const [data, setData] = useState<Movie[]>([])
    const [page, setPage] = useState(1)
    const observer = useRef<IntersectionObserver | null>(null);
    const lastDataElementRef = useCallback((node: HTMLElement | null) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPage(prevPageNumber => prevPageNumber + 1);
            }
        })
        if (node) observer.current.observe(node)
    }, [])

    useEffect(() => {
        fetchDiscoverMovies(page).then((item) => {
            console.log(item.results)
            setData((prevData: Movie[]) => [...prevData, ...item.results])
            console.log(data)
        })
    }, [page])


    return (
        <div
            className={clsx("grid gap-4 shadow-2xl items-center justify-between lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1", className)}>
            {data.map((movie, index) => {
                if (data.length === index + 1) {
                    return <div ref={lastDataElementRef} key={index}><MovieCard movie={movie}/></div>
                } else {
                    return <div key={index}><MovieCard movie={movie}/></div>
                }
            })}
        </div>
    )
}

export default MovieList