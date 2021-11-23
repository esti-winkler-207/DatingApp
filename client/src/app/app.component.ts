import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users : any;
  public items: any[];



  constructor(private router : Router){
    this.items = this.mapItems(router.config); 
  }
  ngOnInit() {
 
  }

  public onSelect({ item }): void {
    if (!item.items) {
      this.router.navigate([item.path]);
    }
  }

  private mapItems(routes: any[], path?: string): any[] {
    return routes.map((item) => {
      const result: any = {
        text: item.text,
        path: (path ? `${path}/` : "") + item.path,
      };

      if (item.children) {
        result.items = this.mapItems(item.children, item.path);
      }

      return result;
    });
  }




}
