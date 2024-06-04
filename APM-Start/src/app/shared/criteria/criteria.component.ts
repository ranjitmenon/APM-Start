import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrl: './criteria.component.css'

})
export class CriteriaComponent implements AfterViewInit ,OnChanges {

  @Input() listFilter: string;
  @Output() productNameSelectedSubject:  BehaviorSubject<string> = new BehaviorSubject<string>('');
  @ViewChild('filterElement') filterElementRef: ElementRef;

  //productNameSelected$ = this.productNameSelectedSubject.asObservable();

 // private productNameSelectedSubject = new BehaviorSubject<string>('');

 // productNameSelected$ = this.productNameSelectedSubject.asObservable();

  // get listFilter(): string {
  //   return this._listFiter;
  // }

  // set listFilter(value: string) {
  //   this.productNameSelectedSubject.next(value);
  //   console.log('In setter:', value);
  // }

  ngOnChanges(): void {
    this.productNameSelectedSubject.next(this.listFilter);
   //this.itemSelected.emit(this.listFilter);
  }
  ngAfterViewInit(): void {
    this.filterElementRef.nativeElement.focus();
  }
}

