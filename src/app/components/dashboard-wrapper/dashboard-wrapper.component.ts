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
import { UserService } from '../../services/user.service';
import { Token } from '@angular/compiler';

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

    constructor(private spotifyAuthService: SpotifyAuthService, private userService: UserService) { }

    ngOnInit(): void {
        this.spotifyAuthService.getAccessToken()
            .subscribe(token => this.userService.setToken(token));

    }

}