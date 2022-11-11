import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AndroidComponent } from './courses/android/android.component';
import { CoursesComponent } from './courses/courses.component';
import { FullstackComponent } from './courses/fullstack/fullstack.component';
import { JavaComponent } from './courses/java/java.component';
import { PythonComponent } from './courses/python/python.component';
import { TestingComponent } from './courses/testing/testing.component';
import { WebComponent } from './courses/web/web.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'courses',component:CoursesComponent},
  {path:'news',component:NewsComponent},
  {path:'java',component:JavaComponent},
  {path:'python',component:PythonComponent},
  {path:'web',component:WebComponent},
  {path:'android',component:AndroidComponent},
  {path:'testing',component:TestingComponent},
  {path:'fullstack',component:FullstackComponent},
  // {path:'social',component:SocialComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
