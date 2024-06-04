import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrl: './criteria.component.css'

})
export class CriteriaComponent implements AfterViewInit ,OnChanges {

  @Input() listFilter: string | undefined ;
  @Input() hitCount: number | undefined;
  @Output() productNameSelectedSubject:  BehaviorSubject<string> = new BehaviorSubject<string>('');
  @ViewChild('filterElement')
  filterElementRef!: ElementRef;

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

  ngOnChanges(changes: SimpleChanges): void {

    if(changes['listFilter'] && changes['listFilter'].currentValue) {
      this.productNameSelectedSubject.next(changes['listFilter'].currentValue);
    }
   //this.productNameSelectedSubject.next(this.listFilter);
   //this.itemSelected.emit(this.listFilter);
  }
  ngAfterViewInit(): void {
    this.filterElementRef.nativeElement.focus();
  }
}

