import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursesComponent } from './courses/courses.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewsComponent } from './news/news.component';
import { SocialComponent } from './social/social.component';
import { JavaComponent } from './courses/java/java.component';
import { PythonComponent } from './courses/python/python.component';
import { WebComponent } from './courses/web/web.component';
import { AndroidComponent } from './courses/android/android.component';
import { TestingComponent } from './courses/testing/testing.component';
import { FullstackComponent } from './courses/fullstack/fullstack.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    CoursesComponent,
    PagenotfoundComponent,
    NewsComponent,
    SocialComponent,
    JavaComponent,
    PythonComponent,
    WebComponent,
    AndroidComponent,
    TestingComponent,
    FullstackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
