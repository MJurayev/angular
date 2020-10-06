import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users:any=[];

  constructor(users:UsersService) {
  
    let userFake = users.getUsers();
  
    userFake.map(element => {
    if(!element.isAdmin){
     this.users.push(element);
    }
  });
  console.log(this.users);
  }

  ngOnInit(): void {
  }

}
