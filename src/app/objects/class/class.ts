import {Classroom} from "../classroom/classroom";

export class Class {

  id : number = 0;
  name ?: string;
  year ?: number;
  section ?: string;
  classroom ?: Classroom;
  teacher ?: string;
  dateList ?: string[];

}
