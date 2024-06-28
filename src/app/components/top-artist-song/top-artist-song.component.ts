import { Component, OnInit } from '@angular/core';
import { Track } from '../../models/track';
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

    // When the component is initialized it calls the api to get the top artist data
    this.artistService.getUserTopArtist().subscribe((data) => {

      // Pass the artist id to the next api call
      // Calls an api to get the best track of the passed artist ( favourite artist in this case )
      this.artistService.getArtistTopTrack(data.id).subscribe((track) => {
        this.toptrack = track;
      })
    })
  }

}
