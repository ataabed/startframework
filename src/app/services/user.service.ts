import { Injectable } from '@angular/core';
import { User } from '../user';
@Injectable(
  
 /*  {
  providedIn: 'root'
} */
)
export class UserService {

  users:User[]=[
{name:'aaaa',age:11,gender:'m',salary:1000},
{name:'bb',age:11,gender:'f',salary:1000},
{name:'cc',age:11,gender:'m',salary:1000},
{name:'ddd',age:11,gender:'f',salary:1000},

  ]
  constructor() { }
}
