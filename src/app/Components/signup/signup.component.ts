
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { UserdetailsService } from '../../shared/userdetails.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm !: FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private service:UserdetailsService) {
    
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  signUp() {
    this.service.userRegister(this.myForm.value).subscribe({
      next: (res) => {
        alert('User Registered Successfully');
        this.router.navigate(['login'] )
      },
      error: (err) => {
        //alert(err);
        console.log(this.myForm.value)
        console.log(err);
      }
      })
    }

  }

