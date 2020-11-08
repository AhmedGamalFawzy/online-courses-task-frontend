import { Classroom } from './classroom.model';

export interface Teacher {
    id?: number;
    name?: string;
    classrooms?: Classroom[];
}