import { Course } from './course.model';
import { Teacher } from './teacher.model';

export interface Classroom {
    id?: number;
    status?: string;
    course?: Course;
    teacher?: Teacher;
    students?: any[];
    classrooms?: any[];
}