import { Component, OnInit } from '@angular/core';
import { Track } from '../../models/track';
import { ArtistApiService } from '../../services/api/artist-api.service';
import { TracksApiService } from '../../services/api/tracks-api.service';

@Component({
  selector: 'app-top-genres',
  standalone: true,
  imports: [],
  templateUrl: './top-genres.component.html',
  styleUrl: './top-genres.component.css'
})
export class TopGenresComponent implements OnInit {

  tracks: Track[] = [];
  seedArtist: string = '';
  seedGenres: string = '';
  seedTrack: string = '';

  constructor(private artistService: ArtistApiService, private trackService: TracksApiService) { }


  ngOnInit(): void {
    this.artistService.getUserTopArtist().subscribe((artist) => {
      this.seedArtist = artist.id;
      this.seedGenres = artist.genres;

      this.artistService.getArtistTopTrack(artist.id).subscribe((track) => {
        this.seedTrack = track.id;
        console.log(this.seedTrack);

        const queryParams = new URLSearchParams();
        queryParams.append('seed_artists', this.seedArtist);
        queryParams.append('seed_genres', encodeURIComponent(this.seedGenres));
        queryParams.append('seed_tracks', this.seedTrack);


        const params = queryParams.toString();
        console.log(params);

        this.trackService.getRecommended(this.seedArtist, this.seedGenres, this.seedTrack).subscribe((recommended) => {
          this.tracks = recommended.map((item: any) => {
            return {
              id: item.id,
              name: item.name,
              image: item.image,
              artist: item.artist,
              duration: '',
              spotifyUrl: item.spotifyUrl
            };
          });
          console.log(this.tracks[0].spotifyUrl);
        })
      })


    })
  }

  trackRedirect(track: Track){
    window.open(track.spotifyUrl, '_blank');
  }


}
