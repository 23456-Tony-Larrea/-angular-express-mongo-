export class Users {
id?:number;
name:string;
lastName:string;
age:string;
country:string;
province:string;

constructor(name:string,
    lastName:string,
    age:string,
    country:string,
    province:string,
    ){
this.name=name;
this.lastName=lastName;
this.age=age;
this.country=country;
this.province=province;
} 
}
