import { Component, OnInit } from '@angular/core';

import { AppDateAdapter, APP_DATE_FORMATS} from '../date.adapter';


@Component({
  selector: 'app-datepicker-example',
  templateUrl: './datepicker-example.component.html',
  styleUrls: ['./datepicker-example.component.css'],
  providers: [
    {
        provide: AppDateAdapter, useClass: AppDateAdapter
    },
    {
        provide: APP_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
    ]
})

export class DatepickerExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
