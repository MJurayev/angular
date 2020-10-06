import { Component, OnInit } from '@angular/core';
import { config } from '../../config/config';
import { StateController } from '../classes/state-controller';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
public config = config;
  constructor() {
   }
  ngOnInit(): void {
  }


}
