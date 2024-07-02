import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent{


  @Input() userName: string = '';
  @Input() image: string = '';

  constructor(){}

}
