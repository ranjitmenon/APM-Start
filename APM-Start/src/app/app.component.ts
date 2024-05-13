import { Component, OnInit } from '@angular/core';
import { from, of, map,tap,take } from 'rxjs';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    //of(2,4,6,8).subscribe((item) => console.log(item));

    // from([2,3,8,9]).pipe(
    //   map(item => item * 2),
    //   tap(item => item),
    //   map(item => item - 10),
    //   take(3)
    // ).subscribe((item) => console.log(item));
  }
  pageTitle = 'Acme Product Management';
}


