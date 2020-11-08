import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentsUrl = environment.apiUrl + '/students';
  studentSubject = new BehaviorSubject<Student>(undefined);

  constructor(private http: HttpClient) { }

  getAllStudents() {
    return this.http.get(this.studentsUrl);
  }

  getStudentById(studentId: number) {
    return this.http.get(`${this.studentsUrl}/${studentId}`);
  }

  registerToClass(studentId: number, classroomId: number) {
    return this.http.patch(`${this.studentsUrl}/${studentId}/classrooms/${classroomId}`, undefined);
  }
}