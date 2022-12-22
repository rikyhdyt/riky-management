import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-brand',
  templateUrl: './nav-brand.component.html',
  styleUrls: ['./nav-brand.component.css']
})
export class NavBrandComponent implements OnInit{

  constructor(
    private router:Router,
    private loginService:LoginService
  ){}

  ngOnInit(): void {
    
  }

  onLogout(){
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }

  isLoggedin():boolean{
    return this.loginService.isUserLoggedIn();
  }

}
