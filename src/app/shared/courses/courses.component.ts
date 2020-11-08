import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Course } from 'src/app/core/models/course.model';
import { Student } from 'src/app/core/models/student.model';

@Component({
  selector: "courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
})
export class CoursesComponent implements OnInit {
  
  @Input() mode: string;
  @Input() student: Student;
  @Input() courses: Course[];

  @Output('course-select') courseSelect = new EventEmitter();
  
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  constructor() {}

  ngOnInit(): void {
    this.sortOptions = [
      { label: "Name", value: "name" },
      { label: "Status", value: "!status" },
    ];
  }

  onCourseSelection(event: Event, course: Course) {
    this.courseSelect.emit(course);
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf("!") === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
