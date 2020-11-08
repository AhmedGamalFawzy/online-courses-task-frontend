import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachersUrl = environment.apiUrl + '/teachers';

  
  constructor(private http: HttpClient) {}

    getAllTeachers() {
        return this.http.get(this.teachersUrl);
    }
}
