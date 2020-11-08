import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EducationRoutingModule } from './education-routing.module';
import { StudentViewComponent } from './student-view/student-view.component';

@NgModule({
  declarations: [
    StudentViewComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    SharedModule
  ]
})
export class EducationModule { }