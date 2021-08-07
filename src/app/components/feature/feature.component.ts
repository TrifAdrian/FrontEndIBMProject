import { Component, OnInit } from '@angular/core';
import {FeatureService} from "../../services/feature.service";
import {Feature} from "../../objects/feature/feature";

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  feature ?: Feature[]
  feature2 ?: Feature[]

  constructor(private featureService : FeatureService) { }

  ngOnInit(): void {
    //this.featureService.deleteFeatureFromClassroom(1,1).subscribe();

    this.featureService.getClassroomFeaturesById(1)
      .subscribe(
        data => this.feature2=data
      )



  }



}
