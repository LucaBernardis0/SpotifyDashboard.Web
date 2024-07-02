import { Component, Input } from '@angular/core';
import { Track } from '../../models/track';

@Component({
  selector: 'app-top-artist-song',
  standalone: true,
  imports: [],
  templateUrl: './top-artist-song.component.html',
  styleUrl: './top-artist-song.component.css'
})
export class TopArtistSongComponent{

  @Input() toptrack: Track = {} as Track;

  constructor(){}

}
