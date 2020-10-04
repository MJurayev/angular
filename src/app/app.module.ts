import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './admin-sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './admin-navbar/navbar.component';
import { ContentComponent } from './admin-content/content.component';
import { FooterComponent } from './admin-footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes :Routes = [
  {path:'admin', component:AdminComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,

    AdminComponent,
    SidebarComponent,
    ContentComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
