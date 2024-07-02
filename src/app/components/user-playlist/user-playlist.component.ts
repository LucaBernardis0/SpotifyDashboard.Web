import { Component, Input } from '@angular/core';
import { Playlist } from '../../models/playlist';


@Component({
  selector: 'app-user-playlist',
  standalone: true,
  imports: [],
  templateUrl: './user-playlist.component.html',
  styleUrl: './user-playlist.component.css'
})
export class UserPlaylistComponent{

  @Input() playlists: Playlist[] = [];

  constructor(){}
  // When u click on a playlist it redirects you to the spotify page of that playlist
  spotifyRedirect(playlist: Playlist){
    window.open(playlist.spotifyUrl, '_blank');
  }

}
