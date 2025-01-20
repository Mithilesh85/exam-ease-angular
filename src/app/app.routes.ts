import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContentComponent } from './pages/content/content.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Exam Ease | Login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Exam Ease | Register',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Exam Ease | Home',
    children: [
      {
        path: '', // When the path is `/home`
        pathMatch: 'full',
        redirectTo: 'dashboard', // Redirect to `/home/dashboard`
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Exam Ease | Dashboard',
      },
      {
        path: 'content',
        component: ContentComponent,
        title: 'Exam Ease | Content',
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        title: 'Exam Ease | Analytics',
      },
      {
        path: 'comment',
        component: CommentsComponent,
        title: 'Exam Ease | Comment',
      },
    ],
  },
];
