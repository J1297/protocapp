import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  records = []
  title = 'Protocapp - always have the conference in your pocket';

  constructor() {

  }

  ngOnInit() {

  }
}
