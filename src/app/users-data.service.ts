import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor() { }
  getData(){
    return {
        name:'anil',
        age:30,
        id:10
    }
  }
}
