import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Classroom } from 'src/app/core/models/classroom.model';
import { Course } from 'src/app/core/models/course.model';
import { ExceptionMessages } from 'src/app/core/models/ExceptionMessages.constants';
import { Student } from 'src/app/core/models/student.model';
import { CourseService } from 'src/app/core/services/course.service';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  displayClassrooms: boolean;
  courses: Course[];
  selectedCourse: Course;
  currentStudent: Student;

  constructor(private courseService: CourseService, private studentService: StudentService,
              private messageService: MessageService) { }
  
  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((response: Course[]) => {
      this.courses = response;
    });
    this.studentService.studentSubject.subscribe(student => this.currentStudent = student);
  }

  onCourseSelection(course: Course) {
    this.selectedCourse = course;
    this.displayClassrooms = true;
  }

  register(classroom: Classroom) {
    this.studentService.registerToClass(this.currentStudent.id, classroom.id).subscribe((response: Student) => {
      this.currentStudent = response;
      this.studentService.studentSubject.next(response);
      this.messageService.add({
        severity: 'success', summary: 'Success',
        detail: `You have registered to class ${classroom.id} successfully`
      });
    }, error => {
      this.messageService.add({
        key: 'error', severity: 'error', summary: 'Error', 
        detail: `${error.status} : ${ExceptionMessages[error.error.message]}`, life: 5000
      });
    });
  }
}
