import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  coursesUrl = environment.apiUrl + '/courses';


  constructor(private http: HttpClient) { }

  getAllCourses() {
    return this.http.get(this.coursesUrl);
  }

  getCourseById(courseId: number) {
    return this.http.get(`${this.coursesUrl}/${courseId}`);
  }
}
