import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CV_DATA } from '../../core/data/cv.data';
import { CvData } from '../../core/models/cv.model';

import { CvHeaderComponent } from '../../sections/header/header.component';
import { CvExperienceComponent } from '../../sections/experience/experience.component';
import { CvToolsComponent } from '../../sections/tools/tools.component';
import { CvFooterComponent } from '../../sections/footer/footer.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    CommonModule,
    CvHeaderComponent,
    CvExperienceComponent,
    CvToolsComponent,
    CvFooterComponent,
  ],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  cv: CvData = CV_DATA;
}