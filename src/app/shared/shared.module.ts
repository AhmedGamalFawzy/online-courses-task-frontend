import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { ClassroomDialogComponent } from './classroom-dialog/classroom-dialog.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    CoursesComponent,
    ClassroomsComponent,
    ClassroomDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputSwitchModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    TooltipModule,
    TableModule,
    ToastModule,
    MessageModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputSwitchModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    TooltipModule,
    TableModule,
    ToastModule,
    MessageModule,
    // SHARED COMPONENTS
    CoursesComponent,
    ClassroomsComponent,
    ClassroomDialogComponent
  ]
})
export class SharedModule { }
