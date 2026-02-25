import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CV_DATA } from '../../core/data/cv.data';

@Component({
  selector: 'app-cv-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvPageComponent {

  cv = CV_DATA;

}