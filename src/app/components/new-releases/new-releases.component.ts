import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import { ArtistApiService } from '../../services/api/artist-api.service';

@Component({
  selector: 'app-new-releases',
  standalone: true,
  imports: [],
  templateUrl: './new-releases.component.html',
  styleUrl: './new-releases.component.css'
})
export class NewReleasesComponent implements OnInit{

  albums: Album[] = []

  constructor(private artistService: ArtistApiService){}

  ngOnInit(): void {
    this.artistService.getNewReleases().subscribe((newReleases) => {
      this.albums = newReleases.map((item: any)=> {
        return{
          id: item.id,
          image: item.image,
          name: item.name,
          artist: item.artist,
          spotifyUrl: item.spotifyUrl,
          totaltracks: item.total_tracks
        }
      })
    })
  }

  newReleases(album: Album){
    window.open(album.spotifyUrl, '_blank');
  }
}
