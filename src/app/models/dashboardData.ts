import { Album } from "./album";
import { Artist } from "./artist";
import { Playlist } from "./playlist";
import { Track } from "./track";
import { User } from "./user";

export interface DashboardData{
    user: User // User data

    topArtist: Artist // data about the user favourite artist
    artistTopTrack: Track // data ofbest song of the user fvaourite artist

    artistAlbums: Album[] // list of albums from the user's favourite artist
    newReleases: Album[] // List of new Releases
    recommendedTracks: Track[] // list of recommended tracks
    userTopTracks: Track[] // user favourite tracks
    userPlaylists: Playlist[] // list of user playlists
}