import {Property} from "csstype";
import Float = Property.Float;

type Actor = {
    id: number;
    name: string;
    bio: string;
    birth_date: string;
}

export type Movie = {
    "adult": boolean,
    "backdrop_path": string,
    "genre_ids": number[],
    "id": number,
    "original_language": string,
    "original_title": string,
    "overview": string,
    "popularity": number,
    "poster_path": string,
    "release_date": string,
    "title": string,
    "video": boolean,
    "vote_average": number,
    "vote_count": number
    actors: Actor[];
}
