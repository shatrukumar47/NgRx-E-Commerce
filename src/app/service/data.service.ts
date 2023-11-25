import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, catchError, takeUntil, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy{
  private api = "https://fakestoreapi.com/products";
  private destroy$: Subject<void> = new Subject<void>() 
  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(this.api)
    .pipe(
      takeUntil(this.destroy$),
      catchError((error)=>{
        console.log(error);
        return throwError("An error occurred during data retrieval")
      })
    )
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
