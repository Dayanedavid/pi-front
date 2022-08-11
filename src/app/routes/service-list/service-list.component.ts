import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Classes';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceList implements OnInit {
   
  list5:Array<any>= new Array(5);
  services: Post[] = [];

  constructor(
    private router: Router
  ) { 
    
    HttpService.getPostsServices().subscribe(
      {
        next: data => {
          this.services = data;
        },
        error: err => console.error(err)  
      }
    );
  }

  starsB(n?:number){
    return new Array(n ? n : 0);
  }

  starsW(n?:number){
    return new Array(n ? 5 - n : 5);
  }

  teste(){
    this.router.navigateByUrl('/service')
  }

  ngOnInit(): void {
  }
}
