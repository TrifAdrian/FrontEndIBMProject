import {Classroom} from "../classroom/classroom";
import {Schedule} from "../schedule/schedule"

export class Class {

  id : number = 0;
  name ?: string;
  year ?: number;
  section ?: string;
  classroom ?: Classroom;
  teacher ?: string;
  dateList ?: Schedule[];
}
