import {Feature} from "../feature/feature";

export class Classroom {
  id :number = 0;
  name !: string;
  location !: string;
  capacity !: number;
  features_list !: Feature[];

}
