import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Classes';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {

  list5:Array<any>= new Array(5);

  isAuthor!: boolean;
  posts!: Post[];
  postToDelete!: string;
  showDelete: boolean = false;
  
  constructor(private router: Router) {
    const username: string = this.router.url.substring(3);
    AuthService.getLocalContent().subscribe({
      next: data => this.isAuthor = data.username == username
    });
    PostsService.load(this.router.url.substring(3));
    PostsService.getPosts().subscribe({
      next: data => this.posts = data,
      error: err => console.log(err)
    });
  }

  ngOnInit(): void {
  }

  starsB(n?:number){
    return new Array(n ? n : 0);
  }

  starsW(n?:number){
    return new Array(n ? 5 - n : 5);
  }

  toggle(id?: string) {
    this.showDelete = !this.showDelete;
    if (id) this.postToDelete = id;
  }

  getImgUrl(i: number) {
    const imgUrl = this.posts[i].imgUrl;
    return imgUrl ? imgUrl : 'https://images.unsplash.com/photo-1636306950045-4dbb10b7e0f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80';
  }

  deletePost() {
    HttpService.deletePost(this.router.url.substring(3), this.postToDelete).subscribe({
      next: data => console.log(data),
      error: err => console.log(err)
    })
  }

  mostrar: boolean = false;
  teste(){
    this.mostrar = !this.mostrar;
  }
}
