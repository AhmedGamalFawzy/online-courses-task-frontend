import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Student } from './core/models/student.model';
import { StudentService } from './core/services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  studentView: boolean = true;
  students: Student[];
  selectedStudent: Student;
  showStudentClassrooms: boolean;

  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
    this.handleViewMode();
    this.studentService.getAllStudents().subscribe((response:Student[]) => this.students = response);
    this.studentService.studentSubject.subscribe(student => {
      if(this.selectedStudent) {
        this.selectedStudent.classrooms = student?.classrooms;
      }
    });
  }

  handleViewMode() {
    if(!this.studentView) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['edu']);
    }
  }

  onStudentChange(event: any){
    this.studentService.studentSubject.next(event.value);
  }
}
