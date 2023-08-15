import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
  
    this.commonService.getUsers().subscribe(
      (users) => {
        console.log('Fetched Users:', users);
  
        const matchingUser = users.find(
          (u: { email: any; password: any; }) => u.email === email && u.password === password
        );
  
        if (matchingUser) {
          // User is authenticated
          console.log('Authentication successful');
          sessionStorage.setItem('currentUser', JSON.stringify(matchingUser));
          this.showSuccessAlertAndNavigate();
        } else {
          // Authentication failed
          console.log('Authentication failed');
          this.showErrorAlert();
        }
      },
      (error) => {
        console.log('Error fetching user data', error);
      }
    );
  }
  showSuccessAlertAndNavigate() {
    Swal.fire({
      title: 'Thank you...',
      text: 'You submitted successfully!',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate to another page
        this.router.navigate(['list-item']);
      }
    });
  }

  showErrorAlert() {
    Swal.fire('Oops...', 'Invalid credentials!', 'error');
  }
  
}
