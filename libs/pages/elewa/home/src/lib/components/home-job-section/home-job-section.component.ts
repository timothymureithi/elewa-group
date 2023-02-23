import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-home-job-section',
  templateUrl: './home-job-section.component.html',
  styleUrls: ['./home-job-section.component.scss'],
})
export class HomeJobSectionComponent {
  @Input() message:string
  @Input() urlLink:string
  @Input() redirectUrl:string
  @Input() text:string
  @Input() callToActionIntro:string
}
