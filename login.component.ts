import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private authenticationService: AuthenticationService) { 

  }

  ngOnInit(): void {
  }

  email:string = "";
  password:string = "";
  isLoggedIn:boolean = false;

  submitForm(){
    console.log(this.email+'  '+this.password);
  //   if(this.email=='marina@gmail.com' && this.password=='tanay'){
  //     this.isLoggedIn = true;
  //     this.router.navigate(['/','app-home'],{queryParams:{email:this.email,password:this.password, isLoggedIn:this.isLoggedIn}}).then(nav=>{
  //       console.log('nav success to home');
  //     },err=>{
  //       console.log('nav failed to home');
  //     });
  //   }
  //   else alert('please enter correct email or password');
  //  }

    this.authenticationService.login(this.email, this.password)
            .pipe(first())
            .subscribe(
                data => {
                  this.router.navigate(['/','app-home'],{queryParams:{email:this.email,password:this.password}}).then(nav=>{
                          console.log('nav success to home');
                        },err=>{
                          console.log('nav failed to home');
                        });
                },
                error => {
                  console.log('auth failed');
                });
    }

}
