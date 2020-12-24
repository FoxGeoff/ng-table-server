import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../models/interfaces/course';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolverService {

  constructor(private coursesService: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable < Course > {
    return this.coursesService.findCourseById(route.params.id);
  }

}
