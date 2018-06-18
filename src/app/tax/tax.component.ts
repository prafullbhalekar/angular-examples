import { Component, OnInit } from '@angular/core';
import { Empsal} from '../empsal';
import { EMPSAL } from '../mock-empsal';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
Data = EMPSAL;
selectedunit: Empsal;
incometax: number; 
  constructor() { }

  ngOnInit() {
  }
onSelect(unit: Empsal) {
     this.incometax = 0 ;
     this.selectedunit = unit ;
     if(this.selectedunit.Salary > 500000)
     {
       this.incometax=((0.2*(this.selectedunit.Salary - 500000)) + (0.1*(500000 - 250000)));
     }
       else if (this.selectedunit.Salary > 250000 && this.selectedunit.Salary  < 500000)
       {
         this.incometax=(0.1* (this.selectedunit.Salary - 25000));
       }
       else {
         this.incometax=0;
       }
     }
}

