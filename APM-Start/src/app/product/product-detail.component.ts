import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  constructor(private route: ActivatedRoute, private router : Router) {

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`
  }

  onBack(): void {
    this.router.navigate(['/product'])
  }
}


