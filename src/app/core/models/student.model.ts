import { Classroom } from './classroom.model';

export interface Student {
    id?: number;
    name?: string;
    classrooms?: Classroom[];
}