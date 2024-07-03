import { Component, Input } from '@angular/core';
import { Track } from '../../models/track';
import { Album } from '../../models/album';

@Component({
  selector: 'app-top-genres',
  standalone: true,
  imports: [],
  templateUrl: './top-genres.component.html',
  styleUrl: './top-genres.component.css'
})
export class TopGenresComponent {

  @Input() tracks: Track[] = []; // List of recommended tracks
  @Input() albums: Album[] = []; // list of artist albums

  constructor() { }

  // Redirect the user to the spotify page of the selected album
  albumRedirect(album: Album){
    window.open(album.spotifyUrl, '_blank')
  }

    // Redirect the user to the spotify page of the selected track
  trackRedirect(track: Track){
    window.open(track.spotifyUrl, '_blank');
  }


}
