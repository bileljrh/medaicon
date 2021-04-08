import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { AdminComponent } from './components/admin/admin.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'index', component: HomepageComponent },


  { path: 'dictionary', component: DictionaryComponent },
  { path: 'request-password-reset', component: RequestResetComponent,canActivate: [BeforeLoginService]},
  { path: 'response-password-reset', component: ResponseResetComponent},

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)

  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
