import { Component, OnInit } from '@angular/core';
import { ArtistApiService } from '../../services/api/artist-api.service';
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-top-artist',
  standalone: true,
  imports: [],
  templateUrl: './top-artist.component.html',
  styleUrl: './top-artist.component.css'
})
export
 class TopArtistComponent implements OnInit{

  topArtist: Artist = {} as Artist;

  constructor(private artistApiService: ArtistApiService) { }

  ngOnInit(): void {
    this.artistApiService.getUserTopArtist().subscribe((data) => {
      this.topArtist = data;
      console.log(this.topArtist);
    })
  }

}
