import { Component, Input, OnInit } from '@angular/core';
import { IUsers } from 'src/app/interfaces/i-users';
import { ToasterService } from 'src/app/services/toaster.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  showMore:boolean=false;
  showToast:boolean=false;
  isConfirmDelete:boolean=false;

  @Input() user:IUsers = {} as IUsers;

  constructor(private userService:UserService, private toastService:ToasterService){}

  ngOnInit(): void {
    
  }

  showToggle():void{
    this.showMore=!this.showMore;
  }

  cancel():void{
    this.user={} as IUsers;
    this.showMore=false;
  }

  setUser(user:IUsers){
    this.user=JSON.parse(JSON.stringify(user));
  }

  onCreate():void{
    this.userService.create(this.user).subscribe(
      (response:IUsers)=>{
        this.showMore=false;
        this.user={} as IUsers;
        this.toastService.showToast=true;
        this.toastService.message= `Berhasil menyimpan data ${response.firstName} ${response.lastName}`;
      }
    )
  }

  onUpdate():void{
    this.userService.create(this.user).subscribe(
      (response:IUsers)=>{
        this.showMore=false;
        this.user={} as IUsers;
        this.toastService.showToast=true;
        this.toastService.message= `Berhasil mengubah data menjadi ${response.firstName} ${response.lastName}`;
      }
    )
  }

  onDelete():void{
    this.userService.delete(this.user, this.user.id).subscribe(
      (response:IUsers)=>{
        this.showMore=false;
        this.user={} as IUsers;
        this.toastService.showToast=true;
        this.toastService.message= `Berhasil Menghapus data ${response.firstName} ${response.lastName}`;
      }
    )
  }



}
