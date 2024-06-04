import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { BehaviorSubject, Observable, Subscription, catchError, combineLatest, map, of } from 'rxjs';


@Component({
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  listFilter: string = '';
  sub!: Subscription;


  //private productNameSelectedSubject = new BehaviorSubject<string>('');

 // productNameSelected$ = this.productNameSelectedSubject.asObservable();

  // get listFilter(): string {
  //   return this._listFiter;
  // }

  // set listFilter(value: string) {
  //   this.productNameSelectedSubject.next(value);
  //   console.log('In setter:', value);
  // }

  constructor(private productService: ProductService) {
   
  }


  products$: Observable<IProduct[]> = this.productService.products$
    .pipe(

      catchError(err => {
        this.errorMessage = err;
        return of([])
      }));


  // products$ = combineLatest([
  //   this.productService.products$,
  //   this.productNameSelected$
  // ]).pipe(
  //   map(([products, selectedProduct]) =>
  //     products.filter((product: IProduct) =>
  //       product.productName.toLocaleLowerCase().includes(selectedProduct))
  //   ))


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onItemSelected(mesage:  BehaviorSubject<string>): void {
    if(mesage) {
    const productNameSelected$ = mesage.asObservable();
    this.products$ = combineLatest([
      this.productService.products$,
      productNameSelected$
    ]).pipe(
      map(([products, selectedProduct]) =>
        products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().includes(selectedProduct))
      ))
    }
  }

  onRatingClicked(mesage: string): void {
    this.pageTitle = 'Product List: ' + mesage;
  }
}
