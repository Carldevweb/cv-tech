import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';
import { CvComponent } from './pages/cv/cv.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', component: CvComponent, title: 'CV Tech' },
      { path: '**', redirectTo: '' },
    ],
  },
];