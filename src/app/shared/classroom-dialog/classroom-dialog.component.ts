import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Classroom } from 'src/app/core/models/classroom.model';
import { Course } from 'src/app/core/models/course.model';
import { Teacher } from 'src/app/core/models/teacher.model';
import { TeacherService } from 'src/app/core/services/teacher.service';

@Component({
  selector: 'classroom-dialog',
  templateUrl: './classroom-dialog.component.html',
  styleUrls: ['./classroom-dialog.component.css']
})
export class ClassroomDialogComponent implements OnInit, OnChanges {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  @Input() course: Course;
  @Output() submit = new EventEmitter();

  teachers: SelectItem[] = [];
  selectedTeacher: Teacher;
  classForm: FormGroup;

  constructor(private fb: FormBuilder, private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.classForm = this.fb.group({
      course: ['', [Validators.required]],
      teacher: ['', [Validators.required]]
    });
    this.teacherService.getAllTeachers().subscribe((response: Teacher[]) => {
      response.forEach(teacher => this.teachers.push({label: teacher.name, value: teacher.name}));
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.course && this.classForm) {
      this.course = changes.course.currentValue;
      this.classForm.patchValue({
        course: this.course?.name
      });
    }
  }

  onSubmit(formValue: Classroom, event: Event) {
    this.submit.emit(formValue);
    this.display = false;
    event.stopPropagation();
  }

  closeDialog() {
    this.displayChange.emit(this.display);
    this.classForm.patchValue({
      teacher: undefined
    });
    this.classForm.markAsPristine();
  }
}
