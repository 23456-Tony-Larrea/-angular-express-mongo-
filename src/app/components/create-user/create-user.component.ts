import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../../models/users';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
 userForm:FormGroup;
 title='Crear Usuarios';
 id:string;
  constructor( private validator:FormBuilder , 
    private router:Router , 
    private toastr: ToastrService,
    private _userService:UsersService,
    private aRouter:ActivatedRoute) {
  this.userForm=this.validator.group({
    name:['',Validators.required],
    lastName:['',Validators.required],
    age:['',Validators.required],
    country:['',Validators.required],
    province:['',Validators.required]
  });
   this.id=this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
  this.byEdit();
  }
 addUser(){
  const user:Users={
   name:this.userForm.get('name')?.value,
   lastName:this.userForm.get('lastName')?.value,
   age:this.userForm.get('age')?.value,
   country:this.userForm.get('country')?.value,
   province:this.userForm.get('province')?.value,
  }
  if(this.id !==null){
   //edit users
 this._userService.editUsers(this.id,user).subscribe(data=>{
  this.toastr.info('el usuario fue actualizado con exito!','usuario actualizado!')
  this.router.navigate(['/'])
 },error=>{
  console.log(error);
  this.userForm.reset(); 
 })
  } //insert users  
  else{
    this._userService.insertUsers(user).subscribe(data=>{
      this.toastr.success('el usuario fue registado con exito!','usuario registrado!')
      this.router.navigate(['/'])
    }),error=>{
     console.log(error);
     this.userForm.reset(); 
    }
  }
 }
 byEdit(){
if(this.id!==null){
  this.title="Editar producto";
  this._userService.getUserById(this.id).subscribe(data=>{
    this.userForm.setValue({
      name:data.name,
      lastName:data.lastName,
      age:data.age,
      country:data.country,
      province:data.province      
    })
  })
}
 }
}
