import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Classroom } from '../models/classroom.model';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  classroomsUrl = environment.apiUrl + '/classrooms';


  constructor(private http: HttpClient) { }

  getAllClasrooms() {
    return this.http.get(this.classroomsUrl);
  }

  createClassroom(classroom: Classroom) {
    return this.http.post(this.classroomsUrl, classroom);
  }

  closeClassroom(classroomId: number) {
    return this.http.patch(`${this.classroomsUrl}/${classroomId}`, {status: 'CLOSED'});
  }
}
