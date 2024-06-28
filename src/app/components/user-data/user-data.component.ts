import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserApiService } from '../../services/api/user-api.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit {

  user: User = {} as User;

  constructor(private userApiService: UserApiService){}

  ngOnInit(): void {

    // When the component is initialized it calls the api to get the requested user's data 
    this.userApiService.getUserData().subscribe((data) => {
      this.user = data;
    });
    
  }

}
