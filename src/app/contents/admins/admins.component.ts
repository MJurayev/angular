import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/admin-navbar/navbar.component';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  public admins:any=[];
    
  constructor(admins:UsersService, navbarTitle:NavbarComponent) {
    navbarTitle.titleTop = "Admins"
    let adminFake = admins.getUsers();
    
    adminFake.forEach(element => {
      if(element.isAdmin){
        this.admins.push(element);
      }
    });
   }
  ngOnInit(): void {
  }

}
