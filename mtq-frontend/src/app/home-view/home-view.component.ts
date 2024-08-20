import { Component } from '@angular/core';
import { PianoKeysComponent } from '../piano-keys/piano-keys.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [PianoKeysComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {

}
