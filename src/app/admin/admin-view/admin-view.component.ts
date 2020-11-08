import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Classroom } from 'src/app/core/models/classroom.model';
import { Course } from 'src/app/core/models/course.model';
import { ExceptionMessages } from 'src/app/core/models/ExceptionMessages.constants';
import { ClassroomService } from 'src/app/core/services/classroom.service';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  displayClassrooms: boolean;
  displayClassroomDialog: boolean
  selectedCourse: Course;
  courses: Course[];

  constructor(private courseService: CourseService, private classroomService: ClassroomService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((response: Course[]) => {
      this.courses = response;
    });
  }

  onCourseSelection(course: Course) {
    this.selectedCourse = course;
    this.displayClassrooms = true;
  }

  createClass(classroom: Classroom) {
    this.classroomService.createClassroom(classroom).subscribe((response: Course) => {
      this.selectedCourse = response;
      this.courses.find(course => course.id == response.id).status = response.status;
      this.courses.find(course => course.id == response.id).classrooms = response.classrooms;
      this.messageService.add({
        severity: 'success', summary: 'Success',
        detail: response.name + ' course has been created successfully'
      });
    }, error => {
      this.messageService.add({
        key: 'error', severity: 'error', summary: 'Error', 
        detail: `${error.status} : ${ExceptionMessages[error.error.message]}`, life: 5000
      });
    });
  }

  closeClassroom(classroom: Classroom) {
    this.classroomService.closeClassroom(classroom.id).subscribe((response: Course) => {
      this.selectedCourse = response;
      this.courses.find(course => course.id == response.id).status = response.status;
    });
  }
}
