import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './course/courses/courses.component';
import { CourseResolverService } from './course/course.resolver.service';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent

  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'courses/:id',
      component: CoursesComponent,
      resolve: {
          course: CourseResolverService
      }
  },
  {
      path: '**',
      redirectTo: '/'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
