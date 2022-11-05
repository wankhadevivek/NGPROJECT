import { Component, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
data:any=[];
  constructor(private dummy:DummyService) { 
    this.dummy.getData().subscribe(data=>{
      console.warn(data);
      this.data=data
    })
  }

  ngOnInit(): void {
  }

}
