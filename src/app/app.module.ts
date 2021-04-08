import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { SidebarMenuprofileComponent } from './components/admin/sidebar-menuprofile/sidebar-menuprofile.component';
import { HomeComponent } from './components/admin/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { MapComponent } from './components/map/map.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { LatestnewsComponent } from './components/latestnews/latestnews.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { MarkerService } from './services/map.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterbackComponent } from './components/admin/footerback/footerback.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SidebarMenuprofileComponent,
    HomeComponent,
   HomepageComponent,
    HeaderComponent,
    SubheaderComponent,
    MapComponent,
    RequestResetComponent,
    ResponseResetComponent,
    LatestnewsComponent,
    DictionaryComponent,
    BlogComponent,
    AboutComponent,
    ScrollToTopComponent,
    FooterComponent,
    FooterbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
