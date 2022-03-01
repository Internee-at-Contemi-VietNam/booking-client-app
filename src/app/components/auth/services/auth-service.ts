import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap, throwError } from 'rxjs';
import { IUser } from '../user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  login(user: IUser) {
    return this.http.post('auth/login', user).pipe(
      tap((res: any) => localStorage.setItem('token', res.access_token)),
      tap(() =>
        this.snackbar.open('Login Successfull', 'Close', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        })
      )
    );
  }

  register(user: IUser) {
    return this.http.post<IUser>('auth/register', user).pipe(
      tap((registeredUser: IUser) =>
        this.snackbar.open(
          `User ${registeredUser.email} registered successfully`,
          'Close',
          {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          }
        )
      ),
      catchError((e) => {
        this.snackbar.open(
          `User could not be registered, error: ${e.error.message}`,
          'Close',
          {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          }
        );
        return throwError(e);
      })
    );
  }

  getLoggedInUser() {
    // const decodedToken = this.jwtService.decodeToken();
    // return decodedToken.user;
  }
}
