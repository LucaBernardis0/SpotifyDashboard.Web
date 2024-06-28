import { Component, OnInit } from '@angular/core';
import { Track } from '../../models/track';
import { ArtistApiService } from '../../services/api/artist-api.service';
import { TracksApiService } from '../../services/api/tracks-api.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-top-genres',
  standalone: true,
  imports: [],
  templateUrl: './top-genres.component.html',
  styleUrl: './top-genres.component.css'
})
export class TopGenresComponent implements OnInit {

  tracks: Track[] = [];
  albums: Album[] = [];
  seedArtist: string = '';
  seedGenres: string = '';
  seedTrack: string = '';

  constructor(private artistService: ArtistApiService, private trackService: TracksApiService) { }


  ngOnInit(): void {
    this.artistService.getUserTopArtist().subscribe((artist) => {
      this.seedArtist = artist.id;
      this.seedGenres = artist.genres;

      // Retrieve n albums of the favourite artist
      this.artistService.getArtistAlbums(artist.id).subscribe((album) => {
        this.albums = album.map((item: any)=> {
          return{
            id: item.id,
            image: item.image,
            name: item.name,
            artist: item.artist,
            spotifyUrl: item.spotifyUrl,
            totaltracks: item.total_tracks
          }
        })
        console.log(this.albums[0].totaltracks)
      })

  

      // Retrieve best song of favourit albums
      this.artistService.getArtistTopTrack(artist.id).subscribe((track) => {
        this.seedTrack = track.id;
        console.log(this.seedTrack);

        const queryParams = new URLSearchParams();
        queryParams.append('seed_artists', this.seedArtist);
        queryParams.append('seed_genres', encodeURIComponent(this.seedGenres));
        queryParams.append('seed_tracks', this.seedTrack);


        const params = queryParams.toString();
        console.log(params);

        // Retireve recommended songs, passing artistId, trackId and genre to base on that
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

  albumRedirect(album: Album){
    window.open(album.spotifyUrl, '_blank')
  }

  trackRedirect(track: Track){
    window.open(track.spotifyUrl, '_blank');
  }


}
