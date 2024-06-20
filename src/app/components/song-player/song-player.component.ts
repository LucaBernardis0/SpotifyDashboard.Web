import { Component, Input } from '@angular/core';
import { Songs } from '../../models/songs';

@Component({
  selector: 'app-song-player',
  standalone: true,
  imports: [],
  templateUrl: './song-player.component.html',
  styleUrl: './song-player.component.css'
})
export class SongPlayerComponent {

  played: Boolean = false;
  @Input() songName: String = "";

  nextsong() {
    console.log("Next song");
    this.played = true
  }

  StartOrpause() {
    if (!this.played) {
      console.log("play");
      this.played = true;
    }
    else {
      console.log("pause");
      this.played = false;
    }
  }

  rewindSong() {
    console.log("Rewind song")
    this.played = true;
  }

}
