import {Schedule} from "../schedule/schedule";

export class Classdetail {
  name ?:string;
  year ?:number;
  section ?:string;
  dates ?:Schedule[];
  teacherId ?:number;
  classroomId ?:number;
}
