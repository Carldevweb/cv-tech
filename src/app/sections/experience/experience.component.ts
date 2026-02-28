import { Component, Input } from '@angular/core';
import { CvExperience } from '../../core/models/cv.model';

@Component({
  selector: 'app-cv-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class CvExperienceComponent {
  @Input({ required: true }) data!: CvExperience[];

  onLogoError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/logos/placeholder.png';
  }
}