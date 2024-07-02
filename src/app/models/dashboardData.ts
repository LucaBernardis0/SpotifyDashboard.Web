import { Album } from "./album";
import { Artist } from "./artist";
import { Playlist } from "./playlist";
import { Track } from "./track";
import { User } from "./user";

export interface DashboardData{
    artistAlbum: Album[] // list of albums from the user's favourite artist
    newReleases: Album[] // List of new Releases
    recommended: Track[] // list of recommended tracks
    topArtist: Artist // data about the user favourite artist
    userTopTracks: Track[] // user favourite tracks
    artistTopTrack: Track // data ofbest song of the user fvaourite artist
    user: User // User data
    userPlaylists: Playlist[] // list of user playlists
}