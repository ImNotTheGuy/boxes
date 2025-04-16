import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { ParentBoxComponent } from './parent-box/parent-box.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoxComponent, ParentBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
handleGoBack() {
}
  title = 'boxes';
  parentTitle = 'Parent Box';


  initialTitle = 'Boxes';

  children = [
    {
      title: 'Box 1',
      color: 'red',
      children: [
        {
          title: 'Box 1.1',
          color: 'orange',
        },
        {
          title: 'Box 1.2',
          color: 'purple',
        }
      ]
    }, 
    {
      title: 'Box 2',
      color: 'blue',
    }, 
    {
      title: 'Box 3',
      color: 'green',
    }, 
    {
      title: 'Box 4',
      color: 'yellow',
    }
  ];

  initialChildren = this.children;

  handleClick(childBox: {title: string, color: string, children: any[]}) {
    this.children = childBox.children || [];
    this.parentTitle = childBox.title;
  }



}
