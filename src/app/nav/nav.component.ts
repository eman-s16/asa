import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  title = 'Eman Restoran';
  isLoggedIn: boolean = true; // Initialize as false

  constructor() {}

  ngOnInit() {
    // Check if user is already logged in
    const currentUser = sessionStorage.getItem('currentUser');
    this.isLoggedIn = currentUser ? true : false;
  }
}
