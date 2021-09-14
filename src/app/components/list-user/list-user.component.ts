import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/users';
import {ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
   listUser:Users[]=[];
   
  constructor(private _userService:UsersService, private toastr:ToastrService) { }
   
  ngOnInit(): void {
  this.getDataUser();
  }
 getDataUser(){
   this._userService.getUsers().subscribe(data=>{
     console.log(data);
     this.listUser=data;
    }),error=>{
     console.log(error);
   }
 }
 deleteUser(id:any){
 this._userService.deleteUsers(id).subscribe(data=>{
  this.toastr.error('el usuario fue eliminado con exito','usuario eliminado');
this.getDataUser(); 
},error=>{
 console.log(error);
 })
 }
}
