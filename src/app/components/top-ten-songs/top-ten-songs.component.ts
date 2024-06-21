import { Component, Input, Output, output } from '@angular/core';
import { Track } from '../../models/track';

@Component({
  selector: 'app-top-ten-songs',
  standalone: true,
  imports: [],
  templateUrl: './top-ten-songs.component.html',
  styleUrl: './top-ten-songs.component.css'
})
export class TopTenSongsComponent {
  tracks: Track[] = [
    {
      artist: {
        name: "Mudimbi",
        genres: [],
        id: 1,
        imageUrl: ''
      },
      songName: "Il Mago",
      imgUrl: "vattelapesca",
      genre: []
    },
    {
      artist: {
        name: "Ghali",
        genres: [],
        id: 2,
        imageUrl: ''
      },
      songName: "Cara Italia",
      imgUrl: "vattelapesca",
      genre: []
    },
    {
      artist: {
        name: "Salmo",
        genres: [],
        id: 3,
        imageUrl: ''
      },
      songName: "Il Cielo nella stanza",
      imgUrl: "vattelapesca",
      genre: []
    },
    {
      artist: {
        name: "Coldplay",
        genres: [],
        id: 4,
        imageUrl: ''
      },
      songName: "Yellow",
      imgUrl: "vattelapesca",
      genre: []
    },
    {
      artist: {
        name: "Mackelmore",
        genres: [],
        id: 5,
        imageUrl: ''
      },
      songName: "Can't hold us",
      imgUrl: "vattelapesca",
      genre: []
    },
    {
      artist: {
        name: "Ed Sheeran",
        genres: [],
        id: 6,
        imageUrl: ''
      },
      songName: "Don't",
      imgUrl: "vattelapesca",
      genre: []
    },
    {
      artist: {
        name: "Anya Nami",
        genres: [],
        id: 7,
        imageUrl: ''
      },
      songName: "Bread",
      imgUrl: "vattelapesca",
      genre: []
    },
    {
      artist: {
        name: "Nas",
        genres: [],
        id: 8,
        imageUrl: ''
      },
      songName: "I can",
      imgUrl: "vattelapesca",
      genre: []
    },
    {
      artist: {
        name: "Elton John",
        genres: [],
        id: 9,
        imageUrl: ''
      },
      songName: "I'm still standing",
      imgUrl: "vattelapesca",
      genre: []
    },
  ];

  playSong(song: Track){
    console.log(song.artist.name + ': ' + song.songName);
  }
}
