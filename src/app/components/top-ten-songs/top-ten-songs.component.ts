import { Component, Input, Output, output } from '@angular/core';
import { Track } from '../../models/track';
import { SongPlayerComponent } from '../song-player/song-player.component';

@Component({
  selector: 'app-top-ten-songs',
  standalone: true,
  imports: [],
  templateUrl: './top-ten-songs.component.html',
  styleUrl: './top-ten-songs.component.css'
})
export class TopTenSongsComponent {
  songs: Track[] = [
    {
      artist: "Mudimbi",
      songName: "Il Mago",
      imgUrl: "vattelapesca"
    },
    {
      artist: "Ghali",
      songName: "Cara Italia",
      imgUrl: "vattelapesca"
    },
    {
      artist: "Salmo",
      songName: "Il Cielo nella stanza",
      imgUrl: "vattelapesca"
    },
    {
      artist: "Coldplay",
      songName: "Yellow",
      imgUrl: "vattelapesca"
    },
    {
      artist: "Mackelmore",
      songName: "Can't hold us",
      imgUrl: "vattelapesca"
    },
    {
      artist: "Ed Sheeran",
      songName: "Don't",
      imgUrl: "vattelapesca"
    },
    {
      artist: "Anya Nami",
      songName: "Bread",
      imgUrl: "vattelapesca"
    },
    {
      artist: "Nas",
      songName: "I can",
      imgUrl: "vattelapesca"
    },
    {
      artist: "Elton John",
      songName: "I'm still standing",
      imgUrl: "vattelapesca"
    },
  ];

  name: string = '';


  playSong(song: Track){
    console.log(song.artist + ': ' + song.songName);
    this.name = song.songName;
  }
}
