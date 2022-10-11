import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GitHub-user-search';
  userName: string = '';
  response: any;
  visibility: boolean = true;
  toggle() {
    this.visibility = !this.visibility;
  }
  constructor(private http: HttpClient) {}
  search() {
    this.http
      .get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });
  }
}
