import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Observable, Subscription, map, tap } from 'rxjs';

@Component({
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  //filteredProducts: IProduct[] = [];
  errorMessage: string = '';
  private _listFiter: string = '';
  sub!: Subscription;

  get listFilter(): string {
    return this._listFiter;
  }

  set listFilter(value: string) {
    this.filteredProducts$ = this.performFilter(value);
    console.log('In setter:', value);
  }

  constructor(private productService: ProductService) {

  }

  //products: IProduct[] = [];
 products$!: Observable<IProduct[]>
 filteredProducts$!: Observable<IProduct[]> ;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
  //  this.sub =  this.productService.getProducts().subscribe({
  //     next: products=> {
  //       this.products = products;
  //       this.filteredProducts = this.products;
  //     },
  //     error: err => this.errorMessage = err
  //   });

  this.products$ = this.productService.getProducts();
  this.products$ .pipe(
    map(x=> x),
    tap(x=> console.log(`The value of product$ is ${x}`))
  )
  this.filteredProducts$ = this.products$;

  // this.filteredProducts$ .pipe(
  //   map(x=> x),
  //   tap(x=> console.log(`The value of filteredProducts$ is ${x}`)))
  }

  onRatingClicked(mesage: string): void {
    this.pageTitle = 'Product List: ' + mesage;
  }

  performFilter(filterBy: string): Observable<IProduct[]>   {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products$?.pipe(map(products => products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy))));
  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }
}
