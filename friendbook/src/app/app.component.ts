import { Component, OnInit} from '@angular/core';
import { Friend } from './friend'
import {AddFriendService} from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private addFriendService
  allFriends: any;

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

  friendModel = new Friend("", "", "", 0, "");

  test() {
    this.addFriendService.addFriend(this.friendModel).subscribe((data => JSON.stringify(data)));
    this.fetchFriends("http://localhost:9000/allFriends")
  }

  constructor(addFriendServ: AddFriendService) {
    this.addFriendService = addFriendServ
  }

  ngOnInit() {
    this.fetchFriends("http://localhost:9000/allFriends")
  }



  public async fetchFriends(url: string): Promise<any> {
    await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json()
    }).then(data => (this.allFriends = data));
  }
}

