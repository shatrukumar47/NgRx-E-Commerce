import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadProductsFailure, loadProductsRequest, loadProductsSuccess } from './product.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DataService } from '../../service/data.service';


@Injectable({
  providedIn: 'root',
})

export class ProductEffects {

    loadProductsRequest$ = createEffect(()=> this.action$.pipe(
        ofType(loadProductsRequest),
        mergeMap(()=> this.dataService.getData().pipe(
            map(data => loadProductsSuccess({data})),
            catchError( err=> of(loadProductsFailure()))
        ))
    ))


    constructor(private action$: Actions, private dataService: DataService ){}
}
