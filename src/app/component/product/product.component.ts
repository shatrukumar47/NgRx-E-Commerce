import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ProductActions from '../../store/product/product.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: any = [];
  loading:boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProductsRequest());
    this.store.select((state) => state.products.data).subscribe((products) => {
        this.products = products
    });
    this.store.select((state) => state.products.isLoading).subscribe((loading) => {
      this.loading = loading
  });
  }

}
