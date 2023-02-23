import { Component, Input } from '@angular/core';

@Component({
  selector: 'elewa-group-home-job-section',
  templateUrl: './home-job-section.component.html',
  styleUrls: ['./home-job-section.component.scss'],
})
export class HomeJobSectionComponent {
  @Input() message:"Become part of our family"
  @Input() urlLink:"view"
  @Input() redirectUrl:"/jobs"
  @Input() text:""
  @Input() callToActionIntro:"opportunities"
}
