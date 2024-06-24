import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopArtistComponent } from "../top-artist/top-artist.component";
import { TopTenSongsComponent } from "../top-ten-songs/top-ten-songs.component";
import { WeeklySongComponent } from "../weekly-song/weekly-song.component";
import { WeeklyListenTimeComponent } from "../weekly-listen-time/weekly-listen-time.component";
import { UserDataComponent } from "../user-data/user-data.component";
import { SongPlayerComponent } from "../song-player/song-player.component";
import { DailyListenTimeComponent } from "../daily-listen-time/daily-listen-time.component";
import { TopGenresComponent } from "../top-genres/top-genres.component";
import { DailySongComponent } from "../daily-song/daily-song.component";
import { SpotifyAuthService } from '../../services/spotify-auth.service';

@Component({
    selector: 'app-dashboard-wrapper',
    standalone: true,
    templateUrl: './dashboard-wrapper.component.html',
    styleUrls: ['./dashboard-wrapper.component.css'],
    providers: [HttpClient, SpotifyAuthService],
    imports: [TopArtistComponent, TopTenSongsComponent, UserDataComponent, DailyListenTimeComponent, DailySongComponent, TopGenresComponent, WeeklySongComponent, WeeklyListenTimeComponent, SongPlayerComponent]
})
export class DashboardWrapperComponent implements OnInit {

    spotifyToken: string = '';

    constructor(private spotifyAuthService: SpotifyAuthService) { }

    ngOnInit(): void {
        this.spotifyAuthService.getAccessToken()
            .then(token => console.log(`${token}`))
            .catch(error => console.error(`Error: ${error}`));

    }

}