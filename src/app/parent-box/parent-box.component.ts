import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-box',
  standalone: true,
  imports: [],
  templateUrl: './parent-box.component.html',
  styleUrl: './parent-box.component.css'
})
export class ParentBoxComponent {
handleGoBack() {
throw new Error('Method not implemented.');
}

  @Input() title: string = 'Boxes';

  @Input() children: string[] = [];
  @Input() initialTree: { title: string; color: string; children: any[]; } = [];



}
