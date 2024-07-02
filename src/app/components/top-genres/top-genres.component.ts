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

  // Query parameters values
  seedArtist: string = '';
  seedGenres: string = '';
  seedTrack: string = '';

  constructor(private artistService: ArtistApiService, private trackService: TracksApiService) { }

  // When the component is initialized it need to call various apis to work
  ngOnInit(): void {

    // Api call that retrieve the top artist data to get his id and his main genre
    /* this.artistService.getUserTopArtist().subscribe((artist) => {

      // setting the necessaries data to the query params values
      this.seedArtist = artist.id;
      this.seedGenres = artist.genres;

      // Retrieve the albums of the favourite artist
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
      })

      // Retrieve best song of favourit albums to get the last needed value ( track id )
      this.artistService.getArtistTopTrack(artist.id).subscribe((track) => {

        // Settign the missing query param value
        this.seedTrack = track.id;

        // Building the search params
        const queryParams = new URLSearchParams();
        queryParams.append('seed_artists', this.seedArtist);
        queryParams.append('seed_genres', encodeURIComponent(this.seedGenres));
        queryParams.append('seed_tracks', this.seedTrack);

        // Retireve recommended songs, passing artistId, trackId and genre to make the api base on that parameters to find similar tracks
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
        })
      })


    }) */
  }

  // Redirect the user to the spotify page of the selected album
  albumRedirect(album: Album){
    window.open(album.spotifyUrl, '_blank')
  }

    // Redirect the user to the spotify page of the selected track
  trackRedirect(track: Track){
    window.open(track.spotifyUrl, '_blank');
  }


}
