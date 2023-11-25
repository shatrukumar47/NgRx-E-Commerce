import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../service/auth.service';
import * as AuthActions from './auth.actions';
import { tap, mergeMap, catchError, map } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { Router } from '@angular/router';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      mergeMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map((token) => AuthActions.loginSuccess({ token: token.token })),
          catchError((error) => of(AuthActions.loginFailure()))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(({ token }) => {
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('token', token);
            this.router.navigate(['/']);
            alert('Welcome to NgRx');
          }
        })
      ),
    { dispatch: false }
  );

  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
}
