import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { AboutPage } from './routes/about/about.component';
import { ContactPage } from './routes/contact/contact.component';
import { CreatePostComponent } from './routes/create-post/create-post.component';
import { HomePage } from './routes/home/home.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { ProfileEditComponent } from './routes/profile-edit/profile-edit.component';
import { ServiceCreateComponent } from './routes/service-list/service-create/service-create.component';
import { ServiceList } from './routes/service-list/service-list.component';
import { SignInPage } from './routes/signin/signin.component';
import { SignUpPage } from './routes/signup/signup.component';
import { UserProfileComponent } from './routes/user-profile/user-profile.component';


const routes: Routes = [
  { path: ''            , component: HomePage },
  { path: 'signin'      , component: SignInPage },
  { path: 'signup'      , component: SignUpPage },
  { path: 'about'       , component: AboutPage },
  { path: 'contact'     , component: ContactPage },
  { path: 'post'        , component: PostComponent },
  { path: 'service'     , component: ServiceList },
  { path: 'screate'     , component: ServiceCreateComponent },
  { path: 'cs'          , component: CreatePostComponent },
  { path: 'u/:userslug' , component: UserProfileComponent },
  { path: 'edit'          , component: ProfileEditComponent },
  { path: '**'          , component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
