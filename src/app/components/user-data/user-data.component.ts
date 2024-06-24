import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit {

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUserData().subscribe((data) => {
      console.log(data);
      // do something with the data
    });
  }

}
