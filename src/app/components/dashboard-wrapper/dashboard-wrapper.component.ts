import { Component } from '@angular/core';
import { TopArtistComponent } from "../top-artist/top-artist.component";
import { TopTenSongsComponent } from "../top-ten-songs/top-ten-songs.component";
import { UserDataComponent } from "../user-data/user-data.component";
import { SongPlayerComponent } from "../song-player/song-player.component";
import { TopGenresComponent } from "../top-genres/top-genres.component";
import { TopArtistSongComponent } from '../top-artist-song/top-artist-song.component';
import { UserPlaylistComponent } from "../user-playlist/user-playlist.component";
import { NewReleasesComponent } from "../new-releases/new-releases.component";

@Component({
    selector: 'app-dashboard-wrapper',
    standalone: true,
    templateUrl: './dashboard-wrapper.component.html',
    styleUrls: ['./dashboard-wrapper.component.css'],
    imports: [TopArtistComponent, TopTenSongsComponent, UserDataComponent, TopGenresComponent, SongPlayerComponent, UserPlaylistComponent, TopArtistSongComponent, NewReleasesComponent]
})
export class DashboardWrapperComponent {

    // Wrapper component that contains all the dashboard components

}