import { Component, inject, OnInit } from '@angular/core';
import { BoxComponent } from './box/box.component';
import { ParentBoxComponent } from './parent-box/parent-box.component';
import { Box } from './models/box.model';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [BoxComponent, ParentBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);

  private boxesUrl = 'assets/boxes.json';

  boxes$!: Observable<Box[]>;
  boxes: Box[] = [];
  currentBox?: Box;

  ngOnInit(): void {
    this.loadBoxes();
    this.boxes$.subscribe((boxes) => {
      console.log('Boxes loaded:', boxes);
      this.boxes = boxes;
      console.log('Boxes mapped:', this.boxes);
      this.currentBox = this.boxes.find((box) => box.title === 'root');
    });
  }

  loadBoxes(): void {
    this.boxes$ = this.http.get<Box[]>(this.boxesUrl).pipe(
      catchError((err) => {
        console.error('Error fetching boxes.json:', err);
        return throwError(() => new Error('Failed to load boxes data'));
      })
    );
  }

  goToBox(boxToNavigateTo: string) {
    this.currentBox = this.boxes.find((box) => box.title === boxToNavigateTo);
  }
}
