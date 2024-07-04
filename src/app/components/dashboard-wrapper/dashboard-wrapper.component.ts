import { DashboardData } from '../../models/dashboardData';
import { Component, OnInit } from '@angular/core';
import { UserDataComponent } from "../user-data/user-data.component";
import { TopArtistComponent } from "../top-artist/top-artist.component";
import { TopGenresComponent } from "../top-genres/top-genres.component";
import { SongPlayerComponent } from "../song-player/song-player.component";
import { DashboardApiService } from '../../services/api/dashboard-api.service';
import { TopTenSongsComponent } from "../top-ten-songs/top-ten-songs.component";
import { NewReleasesComponent } from "../new-releases/new-releases.component";
import { UserPlaylistComponent } from "../user-playlist/user-playlist.component";
import { TopArtistSongComponent } from '../top-artist-song/top-artist-song.component';
import { Config } from '../../models/config';

@Component({
    selector: 'app-dashboard-wrapper',
    standalone: true,
    templateUrl: './dashboard-wrapper.component.html',
    styleUrls: ['./dashboard-wrapper.component.css'],
    imports: [TopArtistComponent, TopTenSongsComponent, UserDataComponent, TopGenresComponent, SongPlayerComponent, UserPlaylistComponent, TopArtistSongComponent, NewReleasesComponent]
})
export class DashboardWrapperComponent implements OnInit{


   // The object that contains the result of the dashboard api call
    public dashboardData: DashboardData | null;
    public dashboardConfig: Config[] = [];

    constructor(private dashboardApiService: DashboardApiService){
        this.dashboardData = null;
    }
    
    // Wrapper component that contains all the dashboard components
    // Gather together all the data from the backend methods and pass them with the @Input() Decorator to the respective components
    // with this single call u can remove all the
    // other services cause all the backend calls are handled by this service
    ngOnInit(): void {
        this.dashboardApiService.getDashboardData().subscribe((data) => { 
            this.dashboardData = data;
            console.log(this.dashboardData);
        })

        // Next Step: Call the DashboardConfig Service to manage the widgets to display
        this.dashboardApiService.getDashboardConfig().subscribe((config) => {
            this.dashboardConfig = config;
            console.log(this.dashboardConfig);
        })
       
    }
}