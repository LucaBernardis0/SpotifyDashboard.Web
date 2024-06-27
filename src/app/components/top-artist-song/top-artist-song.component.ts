import { Component, OnInit } from '@angular/core';
import { Track } from '../../models/track';
import { ArtistService } from '../../services/artist.service';
import { ArtistApiService } from '../../services/api/artist-api.service';

@Component({
  selector: 'app-top-artist-song',
  standalone: true,
  imports: [],
  templateUrl: './top-artist-song.component.html',
  styleUrl: './top-artist-song.component.css'
})
export class TopArtistSongComponent implements OnInit{

  toptrack: Track = {} as Track;

  constructor(private artistService: ArtistApiService){}

  ngOnInit(): void {
    this.artistService.getUserTopArtist().subscribe((data) => {
      this.artistService.getArtistTopTrack(data.id).subscribe((track) => {
        this.toptrack = track;
        console.log(this.toptrack);
      })
    })
  }

}
