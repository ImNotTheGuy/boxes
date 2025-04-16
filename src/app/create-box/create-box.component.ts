import { Component, Input } from '@angular/core';
import { Box } from '../models/box.model';

@Component({
  selector: 'app-create-box',
  standalone: true,
  templateUrl: './create-box.component.html',
  styleUrl: './create-box.component.css'
})
export class CreateBoxComponent {

  @Input() box?: Box;

  handleClick() {

  }

}
