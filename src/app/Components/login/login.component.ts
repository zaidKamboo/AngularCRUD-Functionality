import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { UserdetailsService } from '../../shared/userdetails.service';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
//import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValue!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private service: UserdetailsService,) {
    
  }
  ngOnInit(): void {
    this.formValue = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    this.service.getUserInfo().subscribe({
      next: (res) => {
        console.log(res); let user = 0;
        for (let index = 0; index < res.length; index++) {
          if (this.formValue.value.email === res[index].email && res[index].password === this.formValue.value.password) {
            user = 1;
            break;
            } 
        }
        if (user) {
          alert('success');
          this.formValue.reset();
          this.router.navigate(['restaurant']);
          localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
          this.formValue.value.email ? localStorage.setItem('usertype', 'employee'):'';
        }
        else {
          alert('invalid Credentials');
        }
      },
      error: (err) => {
        alert('Invalid Summary');
      }
    })

  };
}

