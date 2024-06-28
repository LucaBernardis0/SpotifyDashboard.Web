import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../models/track';
import { TracksApiService } from '../../services/api/tracks-api.service';
import { SongPlayerComponent } from '../song-player/song-player.component';
import { Observable, of } from 'rxjs';
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
    this.trackApiService.getTopTenSongs().subscribe((data) => {
      this.tracks = data.map((item: any) => {

        var minuteDuration: string;

        minuteDuration = formatDuration(item.duration_ms);


        return {
          id: item.id,
          artist: {
            id: '', // assign a valid id
            name: item.artist,
            genres: '', // assign a valid genres array
            image: '', // assign a valid image url
            imageUrlType: '' // assign a valid image url type
          },
          name: item.name,
          image: item.image,
          duration: minuteDuration,
          spotifyUrl: ''
        };
      });
      console.log(data);
    });
  }

  callPlaySong(track: Track){
    this.trackService.playSong(track);
  }
}

function formatDuration(durationMs: number): string {
  const minutes = Math.floor(durationMs / 60000);
  const seconds = Math.floor((durationMs % 60000) / 1000);

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
