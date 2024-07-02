import { Album } from "./album";
import { Artist } from "./artist";
import { Playlist } from "./playlist";
import { Track } from "./track";
import { User } from "./user";

export interface DashboardData{
    artistAlbum: Album
    newReleases: Album[]
    recommended: Track[]
    topArtist: Artist
    userTopTracks: Track[]
    artistTopTrack: Track
    user: User
    userPlaylists: Playlist[]
}