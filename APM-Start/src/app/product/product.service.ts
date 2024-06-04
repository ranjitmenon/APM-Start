import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, map, tap, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {

  }

  products$ = this.http.get<IProduct[]>(this.productUrl).pipe(
    map(products => products.map(product => ({
      ...product,
      price: product.price ? product.price * 1.5 : 0,
      searchKey: [product.productName]
    } as IProduct
  ))),
    tap(data => console.log('All', JSON.stringify(data))),
    catchError(this.handleError)
  );

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message} `;
    }
    return throwError(() => errorMessage);
  }
}
