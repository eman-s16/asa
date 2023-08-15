
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  title = 'Eman Restoran';
  currentUser: any; // Holds the currently logged in user
  

  constructor(private router: Router) {}

  ngOnInit() {
    // Retrieve the current user from session storage
    const user = sessionStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
    }
  }

  logout() {
    // Clear the current user from session storage
    sessionStorage.removeItem('currentUser');
    // Redirect to login page
    // Assuming you have a route named 'login'
    // You need to import Router from '@angular/router'
    this.router.navigate(['login']);
  }
}
