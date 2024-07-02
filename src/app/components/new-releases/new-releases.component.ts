import { Component, Input } from '@angular/core';
import { Album } from '../../models/album';

@Component({
  selector: 'app-new-releases',
  standalone: true,
  imports: [],
  templateUrl: './new-releases.component.html',
  styleUrl: './new-releases.component.css'
})
export class NewReleasesComponent{

  @Input() releases: Album[] = []

  constructor(){}

  // Redirect the user to the spotify page of the selected new release
  newReleases(release: Album){
    window.open(release.spotifyUrl, '_blank');
  }
}
