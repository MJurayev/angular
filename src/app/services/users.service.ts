import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/config/config';
// import { config } from 'process';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users:any = [];
  constructor(http:HttpClient) {
    http.get(config.apiUrl +'/api/users').subscribe(response=>{
this.users = response;
console.log(this.users);
    });
}

  public getUsers():any{
    return this.users;
    // return [
    //   {
    //     id:'lkahjslkdjkj', 
    //     username:'webcoderuz',
    //     email:"jo\'rayev Mansur ",
    //     created_at:"2012-falseHttpClient12-23",
    //     updated_at:"2012_12-23",
    //     isAdmin:false
    //     },
    //     {
    //       id:'lkahjslkdjkj', 
    //       username:'webcoderuz',
    //       email:"jo\'rayev Mansur ",
    //       created_at:"2012-12-23",
    //       updated_at:"2012_12-23",
    //       isAdmin:false
    //     }]
  }
}