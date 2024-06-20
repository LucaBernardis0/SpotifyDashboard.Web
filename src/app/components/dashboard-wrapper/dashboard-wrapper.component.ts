import { Component } from '@angular/core';
import { TopArtistComponent } from "../top-artist/top-artist.component";
import { TopTenSongsComponent } from "../top-ten-songs/top-ten-songs.component";
import { WeeklySongComponent } from "../weekly-song/weekly-song.component";
import { WeeklyListenTimeComponent } from "../weekly-listen-time/weekly-listen-time.component";
import { UserDataComponent } from "../user-data/user-data.component";
import { SongPlayerComponent } from "../song-player/song-player.component";

@Component({
    selector: 'app-dashboard-wrapper',
    standalone: true,
    templateUrl: './dashboard-wrapper.component.html',
    styleUrl: './dashboard-wrapper.component.css',
    imports: [TopArtistComponent, TopTenSongsComponent, WeeklySongComponent, WeeklyListenTimeComponent, UserDataComponent, SongPlayerComponent]
})
export class DashboardWrapperComponent {

}
