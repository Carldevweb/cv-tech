import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvFooter } from '../../core/models/cv.model';

@Component({
  selector: 'app-cv-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class CvFooterComponent {
  @Input({ required: true }) data!: CvFooter;
}