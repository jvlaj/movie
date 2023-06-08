"use client"
import React, {useState} from 'react'
import clsx from "clsx";

interface SearchBarProps {
    className?: string
}

const SearchBar: React.FC<SearchBarProps> = ({className}) => {
    const [searchTerm, setSearchTerm] = useState('');

    function onSearch(searchTerm: string) {
        return null
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form className={clsx("flex items-center my-10 mx-2", className,
            "group-focus-within:")} onSubmit={(e) => {
            handleSearch(e)
        }}>
            <div className={clsx("relative")}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={clsx("shadow-2xl border-4 border-gray-200 bg-slate-800 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none animation-all ease-in-out", "hover:bg-slate-200 hover:text-slate-800")}
                />
                <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default SearchBar