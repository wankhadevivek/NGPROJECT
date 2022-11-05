import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
name="";
age:any;
id;
  constructor(private user:UsersDataService) { 
    console.warn(this.user.getData());
    let data = this.user.getData();
    this.name= data.name;
    this.age= data.age;
    this.id= data.id;


  }

  ngOnInit(): void {
  }

}
