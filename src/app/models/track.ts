import { Artist } from "./artist";

export interface Track{
    id: string
    artist: Artist;
    name: string;
    imgUrl: string;
    genre: string[]
}