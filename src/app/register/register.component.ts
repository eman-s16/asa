import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators  } from '@angular/forms';
import { CommonService } from '../common.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  alert: boolean = false;
  createUser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private resto: CommonService, private route: Router) {}

  ngOnInit(): void {}

  regUser() {
    if (this.createUser.valid) {
      if (this.createUser.value.password !== this.createUser.value.confirmPassword) {
        // Passwords do not match
        Swal.fire('Password Mismatch', 'Passwords do not match', 'error');
        return;
      }
  
      // Remove confirmPassword field before sending data to the server
      const userData = { ...this.createUser.value };
      delete userData.confirmPassword;
  
      console.log(userData);
  
      this.resto.createUser(userData).subscribe(
        (result) => {
          console.log(result, 'data created successfully');
  
          // Show a success alert
          Swal.fire('Thank you...', 'You Registered successfully!', 'success').then(() => {
            this.route.navigate(['/login']);
          });
        },
        (error) => {
          console.error('Registration error:', error);
          Swal.fire('Registration Error', 'An error occurred during registration', 'error');
        }
      );
    } else {
      // Form is invalid, show an error
      Swal.fire('Form Error', 'Please fill out all required fields correctly', 'error');
    }
  }
  
}
