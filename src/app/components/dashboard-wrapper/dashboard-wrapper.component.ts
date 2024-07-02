import { Component, OnInit } from '@angular/core';
import { TopArtistComponent } from "../top-artist/top-artist.component";
import { TopTenSongsComponent } from "../top-ten-songs/top-ten-songs.component";
import { UserDataComponent } from "../user-data/user-data.component";
import { SongPlayerComponent } from "../song-player/song-player.component";
import { TopGenresComponent } from "../top-genres/top-genres.component";
import { TopArtistSongComponent } from '../top-artist-song/top-artist-song.component';
import { UserPlaylistComponent } from "../user-playlist/user-playlist.component";
import { NewReleasesComponent } from "../new-releases/new-releases.component";
import { DashboardApiService } from '../../services/api/dashboard-api.service';
import { DashboardData } from '../../models/dashboardData';

@Component({
    selector: 'app-dashboard-wrapper',
    standalone: true,
    templateUrl: './dashboard-wrapper.component.html',
    styleUrls: ['./dashboard-wrapper.component.css'],
    imports: [TopArtistComponent, TopTenSongsComponent, UserDataComponent, TopGenresComponent, SongPlayerComponent, UserPlaylistComponent, TopArtistSongComponent, NewReleasesComponent]
})
export class DashboardWrapperComponent implements OnInit{

    dashboardData: DashboardData = {} as DashboardData

    constructor(private dashboardApiService: DashboardApiService){}
    
    // Wrapper component that contains all the dashboard components
    // Gather together all the data about the components and pass them with the @Input() Decorator tothe other components
    ngOnInit(): void {
        this.dashboardApiService.getDashboardData().subscribe((data) => {
            this.dashboardData = data;
            console.log(this.dashboardData);
        })
    }

    

}