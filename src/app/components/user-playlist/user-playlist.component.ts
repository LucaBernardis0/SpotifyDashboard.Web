import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../models/playlist';
import { UserApiService } from '../../services/api/user-api.service';

@Component({
  selector: 'app-user-playlist',
  standalone: true,
  imports: [],
  templateUrl: './user-playlist.component.html',
  styleUrl: './user-playlist.component.css'
})
export class UserPlaylistComponent implements OnInit{

  playlists: Playlist[] = [];

  constructor(private userService: UserApiService){}

  ngOnInit(): void {
    this.userService.getUserPlaylists().subscribe((data) => {

      console.log(data);
      this.playlists = data.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          image: item.imageUrl,
          owner: item.owner,
          spotifyUrl: item.spotifyUrl
        };
      }); 

      console.log(this.playlists);
    })
  }

  spotifyRedirect(playlist: Playlist){
    window.open(playlist.spotifyUrl, '_blank');
  }

}
