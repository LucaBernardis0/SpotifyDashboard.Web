import { Component, OnInit } from '@angular/core';
import { Track } from '../../models/track';
import { TracksApiService } from '../../services/api/tracks-api.service';
import { TrackService } from '../../services/track.service';

@Component({
  selector: 'app-top-ten-songs',
  standalone: true,
  imports: [],

  templateUrl: './top-ten-songs.component.html',
  styleUrl: './top-ten-songs.component.css'
})
export class TopTenSongsComponent implements OnInit {

  tracks: Track[] = [];
  

  constructor(private trackApiService: TracksApiService, private trackService: TrackService) { }

  ngOnInit(): void {

    // When the component is initialized it calls the api to get the data about the favourite songs of the user
    this.trackApiService.getTopSongs().subscribe((data) => {
      this.tracks = data.map((track: any) => {

        // converted duration value from ms tu right minutes (ex: 2:35)
        var minuteDuration: string;
        minuteDuration = this.formatDuration(track.duration_ms);

        return {
          id: track.id,
          artist: {
            id: '', // assign a valid id
            name: track.artist,
            genres: '', // assign a valid genres array
            image: '', // assign a valid image url
            imageUrlType: '' // assign a valid image url type
          },
          name: track.name,
          image: track.image,
          duration: minuteDuration,
          spotifyUrl: ''
        };
      });
    });
  }

  // Pass the track values to the player component
  callPlaySong(track: Track){
    this.trackService.playSong(track);
  }

  // Convert the duration value from ms to minutes and return the value as a string 
  formatDuration(durationMs: number): string {
  const minutes = Math.floor(durationMs / 60000);
  const seconds = Math.floor((durationMs % 60000) / 1000);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
}


