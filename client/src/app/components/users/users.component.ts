import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : any;
  title : "Users"
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/user').subscribe(response=>{
    this.users = response
    },err=>{
      console.log(err)
    })
  }

}
