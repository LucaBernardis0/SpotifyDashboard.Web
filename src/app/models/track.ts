import { Artist } from "./artist";

export interface Track{
    id: string
    artist: Artist;
    name: string;
    image: string;
    duration: string;
    spotifyUrl: string;
}