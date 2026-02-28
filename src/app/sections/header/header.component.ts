import { Component, Input } from '@angular/core';
import { CvHeader } from '../../core/models/cv.model';

@Component({
  selector: 'app-cv-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class CvHeaderComponent {
  @Input({ required: true }) data!: CvHeader;

  onPhotoError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/profil-placeholder.jpg';
  }
}