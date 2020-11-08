import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { Classroom } from 'src/app/core/models/classroom.model';
import { Student } from 'src/app/core/models/student.model';

@Component({
  selector: 'classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit, OnChanges {

  @Input() display: boolean;
  @Output() displayChange = new EventEmitter();

  @Input() mode: string;
  @Input() classrooms: Classroom[];
  @Input() student: Student;
  @Input() actionTemplate: TemplateRef<any>;
  @Output('classroom-dialog') classroomDialog = new EventEmitter();

  cols: any[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.student) {
      this.student = changes.student.currentValue;
    }
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'course',  header: 'Course',  width: '34%' },
      { field: 'teacher', header: 'Teacher', width: '34%' },
      { field: 'status',  header: 'Status',  width: '15%' }
    ];
  }

  openClassroomDialog() {
    this.classroomDialog.emit(undefined);
  }

  isRegistered(classroom: Classroom) {
    return this.mode=='edu' && this.student.classrooms.some(stdClassroom => stdClassroom.id == classroom.id);
  }

  closeDialog() {
    this.displayChange.emit(this.display);
  }
}
