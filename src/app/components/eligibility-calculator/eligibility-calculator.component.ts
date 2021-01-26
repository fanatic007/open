import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.css']
})
export class EligibilityCalculatorComponent implements OnInit {
  monthlyIncome = 150000;
  monthlyExpense = 30000;
  repaymentTenure = 12;
  existingLoan = false;
  existingLoanEMI = 0;
  loanAmount = 0;
  emi = 0;
  rate = 0.008;
  tenureOptions = [
    {label:"3 Months", value:"3"},
    {label:"6 Months", value:"6"},
    {label:"1 Year", value:"12"},
    {label:"2 Years", value:"24"},
    {label:"3 Years", value:"36"},
    {label:"4 Years", value:"48"},
    {label:"5 Years", value:"60"}
  ];
  constructor() { }

  ngOnInit(): void {this.calculate();
  }

  calculate(){
    this.loanAmount = this.monthlyIncome - (this.monthlyExpense + ( this.existingLoan?this.existingLoanEMI:0) );
    this.emi =  (this.loanAmount * this.rate * Math.pow(1 + this.rate , this.repaymentTenure)) / (Math.pow(1 + this.rate, this.repaymentTenure) - 1); 
  }
}
