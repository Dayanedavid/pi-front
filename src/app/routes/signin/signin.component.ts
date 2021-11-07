import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormTemplate } from 'src/app/components/form/form.component';
import { SignInForm } from 'src/app/models/Classes';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInPage extends FormTemplate {

  staySignedIn: boolean = false;
  showError: boolean = false;

  constructor(private router: Router) {
    super(/(username)|(password)/);
    console.log(window.sessionStorage.getItem('GETSERV_ACC'));
  }

  onFormSubmit(ev: Event): void {
    ev.preventDefault()
    console.log(this.staySignedIn);
    this.signInRequest(this.formMap());
  }

  staysignedin() {
    console.log("Permanecendo logado");
  }

  signInRequest(form: Map<string, any>): void {
    HttpService.signInRequest(new SignInForm(form)).subscribe(
      {
        next: data => {
          console.log(data);
          AuthService.handleTokenResponse(data, this.staySignedIn);
          this.router.navigateByUrl('');
        },
        error: err => {
          console.log(err);
        },
      }
    )
  }

}
