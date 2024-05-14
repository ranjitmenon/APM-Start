import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './product/product-list.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { SearchTextPipe } from './shared/search-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SearchTextPipe,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductListComponent},
      { path: 'product/:id', component: ProductDetailComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
