import { Component, OnInit } from '@angular/core';
import { config } from '../../config/config'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
public config  = config;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
