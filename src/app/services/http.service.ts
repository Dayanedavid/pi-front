import { HttpClient, HttpHeaders, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalContent, Post, ProfileEditForm } from '../models/Classes';
import { SignInForm, SignUpForm, User } from '../models/Classes';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private static readonly apiURL: string = 'https://pi-back7.herokuapp.com';
  static http: HttpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
  static localContent: LocalContent;

  static signUpRequest(form: SignUpForm): Observable<any> {
    return this.http.post(`${this.apiURL}/signup`, form);
  }

  static checkUsername(username: string): Observable<any> {
    return this.http.get(`${this.apiURL}/api/check/username`, { params: { [username]: username } })
  }

  static signInRequest(form: SignInForm): Observable<any> {
    return this.http.post(`${this.apiURL}/signin`, form);
  }

  static getUser(username: string): Observable<any> {
    const options = { headers: { Authorization: AuthService.load().refresh_token,
                                  'Access-Control-Allow-Origin': '*' }};
    return this.http.get<User>(`${this.apiURL}/u/${username}/profile`, options);
  }

  static getPost(id: string): Observable<any> {
    return this.http.get<Post>(`${this.apiURL}/services/${id}`)
  }

  static getPosts(username: string): Observable<any> {
    const options = { headers: { Authorization: AuthService.load().refresh_token,
                                  'Access-Control-Allow-Origin': '*' }};
    return this.http.get<Post[]>(`${this.apiURL}/u/${username}/services`, options);
  }

  static getPostsServices(): Observable<any> {
    return this.http.get<Post[]>(`${this.apiURL}/services`);
  }

  static deletePost(username: string, id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/u/${username}/services/${id}`)
  }
  static updateProfile(form: ProfileEditForm): Observable<any> {
    return this.http.put(`${this.apiURL}/u/edit`, form);
  }

  static refreshToken(): Observable<any> {
    console.log(AuthService.load().refresh_token);
    const options = { headers: { Authorization: AuthService.load().refresh_token,
                                  'Access-Control-Allow-Origin': '*' }};
    console.log(options);
    return this.http.get(`${this.apiURL}/token-refresh`, options);
  }

  static searchPost(tag: string): Observable<any> {
    return this.http.get<Post[]>(this.apiURL, { params: { [tag]: tag }});
  }

  static postPost(post: Post): Observable<any> {
    return this.http.post(`${this.apiURL}/u/${AuthService.localContent$.value.username}/services`, post);
  }

  static postImg(newService: Post): Observable <Post>{
    let token = window.sessionStorage.getItem('token');
    return this.http.post<Post>(this.apiURL + 'u/provider',
    newService, {headers: {Authorization: `${token}`}})
  }

  static getImg(): Observable<Post[]>{
    let token = window.sessionStorage.getItem('token');
    return this.http.get<Post[]>(this.apiURL + 'u/service',
    {headers: {Authorization: `${token}`}})
  }
}
