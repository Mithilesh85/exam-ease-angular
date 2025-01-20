import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    RouterOutlet,
    MatSnackBarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'exam ease';
  collapsed = signal<boolean>(false);
  sideNavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));

  authService = inject(AuthService);

  private readonly _snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    // this.isAuthenticated();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      direction: 'ltr',
      duration: 5000,
      panelClass: 'successful',
    });
    this.isAuthenticated();
  }

  isAuthenticated = () => {
    this.authService.authenticate().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  };
}
