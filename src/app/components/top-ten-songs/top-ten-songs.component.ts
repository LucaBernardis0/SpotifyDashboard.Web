import { Component, Output } from '@angular/core';
import { Songs } from '../../models/songs';
import { SongPlayerComponent } from '../song-player/song-player.component';

@Component({
  selector: 'app-top-ten-songs',
  standalone: true,
  imports: [],
  templateUrl: './top-ten-songs.component.html',
  styleUrl: './top-ten-songs.component.css'
})
export class TopTenSongsComponent {
  songs: Songs[] = [
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


  playSong(song: Songs){
    console.log(song.songName);

  }
}
