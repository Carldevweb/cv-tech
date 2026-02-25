import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';
import { CvPageComponent } from './pages/cv/cv.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', component: CvPageComponent, title: 'CV Tech' },
      { path: '**', redirectTo: '' },
    ],
  },
];