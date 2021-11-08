import { Component } from '@angular/core';
import { ProfileEditForm } from 'src/app/models/Classes';
import { Router } from '@angular/router';
import { FormTemplate } from 'src/app/components/form/form.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent extends FormTemplate {

  constructor(private router: Router) {
    super(/(username)|(name)|(email)|(bio)|(password)|(passconf)/);
   }


  onFormSubmit(ev: Event): void {
    ev.preventDefault();
    console.log(this.form);

    const form: Map<string, any> = new Map();

    let i = 0;
    this.fields.forEach(field => {
      form.set(field.name, this.form.value[i]);
      i++;
    });

    console.log(new ProfileEditForm(form));
    HttpService.updateProfile(new ProfileEditForm(form)).subscribe(
      {
        next: data => {
          this.router.navigateByUrl('');
          console.log(data);

        },

        error: err => console.log(err),
        complete: () => console.log("Requisição terminada"),
      }
    )

  }


}
