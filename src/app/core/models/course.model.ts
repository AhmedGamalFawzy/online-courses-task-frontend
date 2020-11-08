import { Classroom } from './classroom.model';

export interface Course {
    id?: number;
    name?: string;
    status?: string;
    classrooms?: Classroom[];
}