import { Component } from '@angular/core';
import { Friend } from './friend'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friendbook';
  languages: any[] = [
    {
      "name": "HTML"
    },
    {
      "name": "CSS"
    },
    {
      "name": "JavaScript"
    },
    {
      "name": "PHP"
    },
    {
      "name": "React"
    },
    {
      "name": "Angular"
    }

  ];


  friendModel = new Friend("","","",0,"");

}

