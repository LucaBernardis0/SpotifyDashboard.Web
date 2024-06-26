import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../models/track';
import { TracksApiService } from '../../services/api/tracks-api.service';

@Component({
  selector: 'app-top-ten-songs',
  standalone: true,
  imports: [],
  templateUrl: './top-ten-songs.component.html',
  styleUrl: './top-ten-songs.component.css'
})
export class TopTenSongsComponent implements OnInit {

  tracks: Track[] = [];

  constructor(private trackApiService: TracksApiService) { }

  ngOnInit(): void {
    this.trackApiService.getTopTenSongs().subscribe((data) => {
      this.tracks = data.map((item: any) => {
        return {
          id: item.id,
          artist: {
            id: '', // assign a valid id
            name: item.name,
            genres: [], // assign a valid genres array
            imageUrl: '', // assign a valid image url
            imageUrlType: '' // assign a valid image url type
          },
          name: item.name,
          imgUrl: '',
          genre: []
        };
      });
      console.log(data);
    });
  }

  playSong(song: Track) {
    console.log(song.artist.name + ': ' + song.name);
  }
}