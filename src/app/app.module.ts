import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './admin-sidebar/sidebar.component';
import { NavbarComponent } from './admin-navbar/navbar.component';
import { FooterComponent } from './admin-footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './contents/users/users.component';
import { ProfileComponent } from './contents/profile/profile.component';
import { AdminsComponent } from './contents/admins/admins.component';
import { PostsComponent } from './contents/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';

const routes :Routes = [
  {path:'profile', component:ProfileComponent},
  {path:'posts', component:PostsComponent},
  {path:'users', component:UsersComponent},
  {path:'admins', component:AdminsComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    UsersComponent,
    ProfileComponent,
    AdminsComponent,
    PostsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
