import { Component, OnInit } from '@angular/core';
import { IUsers, IUsersWrapper } from 'src/app/interfaces/i-users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:Array<IUsers>=[];
  user:IUsers = {} as IUsers;

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.onAll();
  }

  onAll():void{
    this.userService.all()
    .subscribe(
      (response:IUsersWrapper)=>{
        this.users=response.users
      }
    );
  }


}
