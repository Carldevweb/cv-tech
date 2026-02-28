import { Component, Input } from '@angular/core';
import { CvToolsBox } from '../../core/models/cv.model';

@Component({
  selector: 'app-cv-tools',
  standalone: true,
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class CvToolsComponent {
  @Input({ required: true }) data!: CvToolsBox;

  onImgError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}